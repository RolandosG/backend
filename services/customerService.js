const customerModel = require("../models/customerModel.js");


exports.createCustomer = (req,res)=>{
    const newCustomer = new customerModel(req.body);
    newCustomer.save()
    .then((newCustomer)=>{
        
         res.json({
             message : "The customer was created successfully",
             data : newCustomer,
         })
         
    })
    .catch((err)=>{
     res.status(500).json({
         message : `Error in creating customer ${err}`,
     
     })
 })

};
exports.getCustomers =(req,res)=>{

    customerModel.find()
    .then(customer=>{

        res.json({
            message : "A list of all the customers",
            data : customer,
            totalCustomers : customer.length
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};


exports.getACustomer=(req,res)=>{


    customerModel.findById(req.params.id)
    .then(customer=>{

       
        if(customer)
        {
            res.json({

                message : `Customer with the id ${req.params.id}`,
                data : customer
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no Customer in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};


exports.updateACustomer =(req,res)=>{


    customerModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(customer=>{


        //if customer is not null

        if(customer)
        {
            res.json({
                message : `The Customer with the id ${req.params.id} was updated`,
                data : customer
            })

        }

        //customer contains null
        else
        {
            res.status(404).json({
                message : `customer with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.deleteACustomer=(req,res)=>{
    
    customerModel.findByIdAndRemove(req.params.id)
    .then((customer)=>{

        if(customer)
        {
            res.json({
                message: `The customer with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `customer with ID ${req.params.id} was not found`
            })
        }

      

  


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};