const express = require('express');
const product = require('../models/productModel.js');
const router = express.Router()
const productService = require("../services/productService.js");


router.post('/products',productService.createProduct)
router.get('/products',productService.getProducts)
router.get('/products/:id',productService.getAProduct)
router.put('/products/:id',productService.updateAProduct)
router.delete('/products/:id',productService.deleteAProduct)
 // if need be here is the route that I made for a 
                                                                         // specified category it just broke everything for future reference lol
                                                                         
module.exports = router