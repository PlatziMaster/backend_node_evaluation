const { check, validationResult } = require('express-validator');
const Category = require('../models/Category')


module.exports = app => {
    
    
    app.delete('/api/categories/:id' , async(req,res) => {

        try {
               await Category.deleteOne({_id:req.params.id})
               res.json({category: 'DELETED'})
           }catch(e){
               res.status(422).send(e);
           }
       })   
       
    
    app.post('/api/categories/',check('name','Name is required').notEmpty(),async (req,res) => {

     const {name , image} = req.body
     
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     
     let newCategory = new Category({name,image});
     try {
      await newCategory.save()
       res.json({category: 'SAVED'})
     }catch(e)
     {
      res.status(422).send(e);
     }
     })


     app.get('/api/categories/',async (req,res) => {
         Category.find((err,categ) => {
             res.send(categ)
         })
                
        })

    app.get('/api/categories/:id',async (req,res) => {
              Category.findOne({_id:req.params.id},(err,categ) => {
                res.send(categ)
             })
        })
       
    app.put('/api/categories/:id', async(req,res) => {
        const {name , image} = req.body
        try {
            await Category.updateOne({_id:req.params.id},{name,image})
            res.json({category: 'SAVED'})
        }catch(e){
            res.status(422).send(e);
        }
      

     })



}