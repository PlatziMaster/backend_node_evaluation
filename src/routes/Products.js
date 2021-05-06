const { check, validationResult } = require('express-validator');
const Products = require('../models/Product')


module.exports = app => {
    
    
    app.delete('/api/products/:id' , async(req,res) => {

        try {
               await Products.deleteOne({_id:req.params.id})
               res.json({Products: 'DELETED'})
           }catch(e){
               res.status(422).send(e);
           }
       })   
       
    
    app.post('/api/products/',check('name','Name is required').notEmpty(),async (req,res) => {


     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name , price, description, _categoryId, image} = req.body
     
     
     let newProducts = new Products({name , price, description, _categoryId, image});
     try {
      await newProducts.save()
       res.json({Products: 'SAVED'})
     }catch(e)
     {
      res.status(422).send(e);
     }
     })


     app.get('/api/products/',async (req,res) => {
         Products.find((err,categ) => {
             res.send(categ)
         })
                
        })


    app.get('/api/products/:id',async (req,res) => {
              Products.findOne({_id:req.params.id},(err,product) => {
                res.send(product)
             })
        })
       
    app.put('/api/products/:id', async(req,res) => {
        const {name , price, description, _categoryId, image} = req.body
        try {
            await Products.updateOne({_id:req.params.id},{name , price, description, _categoryId, image})
            res.json({Products: 'UPDATED'})
        }catch(e){
            res.status(422).send(e);
        }
      

     })



}