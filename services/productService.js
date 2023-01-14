const productModel = require("../models/productModel.js");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
exports.getProducts = (req,res)=>{


    //yes  or now
    if(req.query.best_seller)
    {
        productModel.find()
       .where("best_seller").equals(req.query.best_seller==="yes" ? true : false)
        .then((product)=>{
            res.json({
                message : req.query.best_seller==="yes" ? `A list of all the featured product` : "A List of non-featured product",
                data : product
            
            })
    
        })
        .catch((err)=>{
            res.status(500).json({
                message : `Error ${err}`,
            
            })
        })
        
    }
    else if(req.query.category)
        {
    
            productModel.find()
    .where("category").equals(req.query.category)
     .then((product)=>{
         res.json({
             message : `A list of items within the category ${req.query.category}`,
             data : product
         
         })
 
     })
     .catch((err)=>{
         res.status(500).json({
             message : `Error ${err}`,
         
         })
     })
             
        }
    //No Query String params where provided, thus, list all the product
    else
    {
        productModel.find()
        .then((product)=>{
            res.json({
                message : `A list of all the product`,
                data : product
            
            })
    
        })
        .catch((err)=>{
            res.status(500).json({
                message : `Error ${err}`,
            
            })
        })
    }


};



exports.createProduct = (req,res)=>{

    const newProduct = new productModel(req.body);

    newProduct.save()
    .then((newProduct)=>{
         

        
         res.json({
             message : "The product was created successfully",
             data : newProduct
         })
    })
    .catch((err)=>{
     res.status(500).json({
         message : `Error in creating product ${err}`,
     
     })
 })

};


exports.getAProduct=(req,res)=>{


    productModel.findById(req.params.id)
    .then(product=>{

       
        if(product)
        {
            res.json({

                message : `product with the id ${req.params.id}`,
                data : product
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : `There is no product in our database with the id ${req.params.id}`,
        })
    })


};


exports.updateAProduct =(req,res)=>{


    productModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(product=>{


        //if product is not null

        if(product)
        {
            res.json({
                message : `The product with the id ${req.params.id} was updated`,
                data : product
            })

        }
    })
    .catch(err=>{
        res.status(500).json({
            message : `product with ID ${req.params.id} was not found`
        })
    })


};

exports.deleteAProduct=(req,res)=>{
    
    productModel.findByIdAndRemove(req.params.id)
    .then((product)=>{

        if(product)
        {
            res.json({
                message: `The product with the ID ${req.params.id} was deleted`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : `product with ID ${req.params.id} was not found`
        })
    })

};



/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/*router.get('/products/category',productService.getSpecifiedCategory)*/ // if need be here is the route that I made for a 
                                                                         // specified category it just broke everything for future reference lol
                                                                         

/*exports.getSpecifiedCategory = (req,res)=>{
    productModel.find()
    .where("category").equals(req.query.category)
     .then((product)=>{
         res.json({
             message : `A list of items within the category ${req.query.category}`,
             data : product
         
         })
 
     })
     .catch((err)=>{
         res.status(500).json({
             message : `Error ${err}`,
         
         })
     })
        
}*/