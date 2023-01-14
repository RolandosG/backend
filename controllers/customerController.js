const express = require('express')
const router = express.Router()
const customerService = require("../services/customerService.js");

router.post('/',customerService.createCustomer)
router.get('/',customerService.getCustomers)
router.get('/:id',customerService.getACustomer)
router.put('/:id',customerService.updateACustomer)
router.delete('/:id',customerService.deleteACustomer)

module.exports = router