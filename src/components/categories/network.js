const express = require('express');
const response  = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Endpoint para retornar la lista de categorías.
router.get('/',function(req,res){
    console.log("[categoriesNetwork] Endpoint para retornar la lista de categorías.")
    controller.getCategorias()
        .then(list => response.success(req,res,list,200))
        .catch(error => response.error(req,res,'Error al obtener todas las categorias',500,error))
});

//Endpoint para retornar un categoría.
router.get('/:id',function(req,res){
    console.log("[categoriesNetwork] Endpoint para retornar un categoría.")
    controller.getCategorias(req.params.id)
        .then(list => response.success(req,res,list,200))
        .catch(error => response.error(req,res,`Categoria ${req.params.id} no encontrada`,400,error))
});

//Endpoint para crear un categoría.
router.post('/',function(req,res){
    console.log("[categoriesNetwork] Endpoint para crear un categoría.")
    controller.addCategoria(req.body)
        .then(categoria => response.success(req,res,categoria,201))
        .catch(error => response.error(req,res,'Error al añadir una categoría',500,error))
});

//Endpoint para modificar un categoría.
router.put('/:id',function(req,res){
    console.log("[categoriesNetwork] Endpoint para modificar un categoría.")
    controller.updateCategoria(req.params.id, req.body)
        .then(categoria => response.success(req, res, categoria, 200))
        .catch(error => response.error(req, res, `Error al modificar la categoría ${req.params.id}`, 500, error))
});

//Endpoint para eliminar un categoría.
router.delete('/:id',function(req,res){
    console.log("[categoriesNetwork] Endpoint para eliminar un categoría.")
    controller.deleteCategoria(req.params.id)
        .then(response.delete(req,res,true,200))
        .catch(response.delete(req,res,false,400))
});

//Endpoint para retornar la lista de productos que pertenecen a una categoría.
router.get('/:categoryId/products', (req, res) => {
    controller.getProductosByCategoria(req.params.categoryId)
        .then(products => response.success(req, res, products, 200))
        .catch(error => response.error(req, res, `Error al consultar productos por categoría`, 500, error))
});

module.exports = router;