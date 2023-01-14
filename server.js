const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customerController = require("./controllers/customerController.js");
const productController = require("./controllers/productController.js");

if(process.env.NODE_ENV!="production")
{
    require('dotenv').config({ path: '.env' });
}
const app = express();

const corsOptionsDelegate = function (req, callback) 
{
  const allowlist = [`http://localhost:3001`, 'http://127.0.0.1:3001'] // ,'https://naughty-knuth-43c447.netlify.app'
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));


app.use(express.json());
app.use("/", productController, customerController);
const port = process.env.PORT || 5000;
app.listen(process.env.PORT,()=>{

    console.log(`Web Server is up and $running  on ${port}`);

    mongoose.connect(process.env.MONGO_DB_CONNECTION_KEY)
    .then(()=>{
        console.log(`Connected to MongoDB`)
        
    })
    .catch((err)=>{
        console.log(`Error :${err}`);
    })
})
