const Category = require("../models/category")

module.exports = {

    get: (req, res) => {
        let categoryId = req.params.categoryId
        Category.findById(categoryId, (err, category) => {
            if(err) return res.status(500).send({message: err})
            if(!category) return res.status(404).send({message: "Category not found."})
            res.status(200).send({category: category})
        })
    },

    get_list: (req, res) => {
        Category.find({}, (err, categories) => {
            if(err) return res.status(500).send({message: err})
            res.status(200).send({results: categories})
        })
    },

    delete: (req, res) => {
        let categoryId = req.params.categoryId
        Category.findById(categoryId, (err, category) => {
            if(err) return res.status(500).send({message: err})
            if(!category) return res.status(404).send({message: "Category not found."})
            category.remove(err => {
                if(err) return res.status(500).send({message: "There was a problem deleting this category."})
                res.status(200).send({message: "Category deleted successfuly."})
            })
        })
    },

    update: (req, res) => {
        const categoryId = req.params.categoryId
        const data = req.body
        Category.findByIdAndUpdate(categoryId, data, {new: true}, (err, categoryUpdated) => {
            if(err) return res.status(500).send({message: err})
            res.status(200).send(categoryUpdated)
        })
    },

    post: (req, res) => {
        let category = new Category();
        category.name = req.body.name;
        category.save((err, categoryStored) => {
            if(err){ return res.status(500).send({message: err}) }
            res.send({category: categoryStored});
        })
    }

}