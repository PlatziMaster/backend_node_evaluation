const express = require('express');
const response  = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Endpoint para retornar la lista de productos.
router.get('/',function(req,res){
    console.log("[network] Endpoint para retornar la lista de productos.")
    controller.getProducts()
        .then(list => response.success(req,res,list,200))
        .catch(error => response.error(req,res,'Error al obtener todos los productos',500,error))
});

//Endpoint para retornar un producto.
router.get('/:id',function(req,res){
    console.log("[network] Endpoint para retornar un producto.")
    controller.getProducts(req.params.id)
        .then(list => response.success(req,res,list,200))
        .catch(error => response.error(req,res,'Producto no encontrado',400,error))
});

//Endpoint para crear un producto.
router.post('/',function(req,res){
    console.log("[network] Endpoint para crear un producto.")
    controller.addProduct(req.body.name,req.body.price,req.body.description,req.body.categoryId,req.body.image)
        .then(response.success(req,res,"Producto añadido correctamente",200))
        .catch(error => response.error(req,res,'Error al añadir un producto',500,error))
});

//Endpoint para modificar un producto.
router.put('/:id',function(req,res){
    response.success(req,res,'update product',200)
});

//Endpoint para eliminar un producto.
router.delete('/:id',function(req,res){
    response.success(req,res,'delete product',200)
});

module.exports = router;