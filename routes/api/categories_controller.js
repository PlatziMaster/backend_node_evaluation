const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
//Categories model 
const Categories = require('../../models/Categories');

//@routes Get api/categories
//@desc Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.find();
        if(!Categories) throw Error('No Items');
        res.status(200).json(Categories);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

//@routes Show api/Categories/:id
//@desc Show a category
router.get('/:id', async (req, res) => {
    try {
        const categories = await Categories.findById(req.params.id);
        if(!categories) throw Error('No Items');
        res.status(200).json(categories);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

//@routes Post api/Categories
//@desc Create a category 

router.post('/', async (req, res) => {
    const newPost = new Categories(req.body);

    try {
        const categories = await newPost.save();
        if(!categories) throw Error('Ocurrio un error con la creación de la categoría')
        res.status(200).json(categories);
    } catch {
        res.status(400).json({msg: error})
    }
});

//@routes Delete api/Categories/:id
//@desc Delete a category
router.delete('/:id', async (req, res) => {
    try {
        const categories = await Categories.findByIdAndDelete(req.params.id);
        if(!categories) throw Error('Categoría no encontrada');
        res.status(200).json({success: true})
    }catch(err) {
        res.status(400).json({msg: error})
    }
});

//@routes Update api/Categories/:id
//@desc Update a category
router.patch('/:id', async (req, res) => {
    try {
        const categories = await Categories.findByIdAndUpdate(req.params.id, req.body);
        if(!categories) throw Error('Algo salio mal con la actualización de la categoría');
        res.status(200).json({success: true});
    }catch(err) {
        res.status(400).json({msg:err});
    }
});


module.exports = router;