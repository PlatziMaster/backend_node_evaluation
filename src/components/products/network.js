const express = require('express');
const response  = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Endpoint para retornar la lista de productos.
router.get('/',function(req,res){
    console.log("[productsNetwork] Endpoint para retornar la lista de productos.")
    controller.getProducts()
        .then(list => response.success(req,res,list,200))
        .catch(error => response.error(req,res,'Error al obtener todos los productos',500,error))
});

//Endpoint para retornar un producto.
router.get('/:id',function(req,res){
    console.log("[productsNetwork] Endpoint para retornar un producto.")
    controller.getProducts(req.params.id)
        .then(product => response.success(req,res,product,200))
        .catch(error => response.error(req,res,`Producto ${req.params.id} no encontrado`,400,error))
});

//Endpoint para crear un producto.
router.post('/',function(req,res){
    console.log("[productsNetwork] Endpoint para crear un producto.")
    controller.addProduct(req.body)
        .then(product => response.success(req,res,product,201))
        .catch(error => response.error(req,res,'Error al añadir un producto',500,error))
});

//Endpoint para modificar un producto.
router.put('/:id',function(req,res){
    console.log("[productsNetwork] Endpoint para modificar un producto.")
    controller.updateProduct(req.params.id, req.body)
        .then(product => response.success(req, res, product, 200))
        .catch(error => response.error(req, res, `Error al modificar el producto ${req.params.id}`, 500, error))
});

//Endpoint para eliminar un producto.
router.delete('/:id',function(req,res){
    console.log("[productsNetwork] Endpoint para eliminar un producto.")
    controller.deleteProduct(req.params.id)
        .then(response.delete(req,res,true,200))
        .catch(response.delete(req,res,false,400))
});

module.exports = router;