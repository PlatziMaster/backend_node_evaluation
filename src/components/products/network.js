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
        .then(list => response.success(req,res,list,200))
        .catch(error => response.error(req,res,`Producto ${req.params.id} no encontrado`,400,error))
});

//Endpoint para crear un producto.
router.post('/',function(req,res){
    console.log("[productsNetwork] Endpoint para crear un producto.")
    controller.addProduct(req.body.name,req.body.price,req.body.description,req.body.categoryId,req.body.image)
        .then(response.success(req,res,"Producto añadido correctamente",201))
        .catch(error => response.error(req,res,'Error al añadir un producto',500,error))
});

//Endpoint para modificar un producto.
router.put('/:id',function(req,res){
    console.log("[productsNetwork] Endpoint para modificar un producto.")
    controller.updateProduct(req.params.id, req.body.name, req.body.price, req.body.description, req.body.categoryId, req.body.image)
        .then(response.success(req, res, `Producto ${req.params.id} modificado`, 200))
        .catch(error => response.error(req, res, `Error al modificar el producto ${req.params.id}`, 500, error))
});

//Endpoint para eliminar un producto.
router.delete('/:id',function(req,res){
    console.log("[productsNetwork] Endpoint para eliminar un producto.")
    controller.deleteProduct(req.params.id)
        .then(() => response.success(req, res, `Producto ${req.params.id} eliminado`, 200))
        .catch(error => response.error(req, res, `Error al eliminar el producto ${req.params.id}`, 500, error))
});

module.exports = router;