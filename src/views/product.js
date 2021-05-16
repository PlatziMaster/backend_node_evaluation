const Product = require("../models/product")

module.exports = {

    get: (req, res) => {
        let productId = req.params.productId
        Product.findById(productId, (err, product) => {
            if(err) return res.status(500).send({message: err})
            if(!product) return res.status(404).send({message: "Product not found."})
            res.status(200).send(product)
        })
    },

    get_list: (req, res) => {
        Product.find({}, (err, products) => {
            if(err) return res.status(500).send({message: err})
            res.status(200).send(products)
        })
    },

    delete: (req, res) => {
        let productId = req.params.productId
        Product.findById(productId, (err, product) => {
            if(err) return res.status(500).send({message: err})
            if(!product) return res.status(404).send({message: "Product not found."})
            product.remove(err => {
                if(err) return res.status(500).send({message: "There was a problem deleting this product."})
                res.status(200).send(true)
            })
        })
    },

    update: (req, res) => {
        const productId = req.params.productId
        const data = req.body
        Product.findByIdAndUpdate(productId, data, {new: true}, (err, productUpdated) => {
            if(err) return res.status(500).send({message: err})
            res.status(200).send(productUpdated)
        })
    },

    post: (req, res) => {
        let product = new Product();
        product.name = req.body.name;
        product.price = req.body.price;
        product.categoryId = req.body.categoryId;
        product.description = req.body.description;
        product.image = req.body.image;
        product.save((err, productStored) => {
            if(err){ 
                console.log(err)
                return res.status(500).send({message: err}) 
            }
            res.status(201).send(productStored);
        })
    }

}