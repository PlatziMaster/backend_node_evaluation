const express = require('express');

const controller = require('./index')
const response = require("../../network/response");

const router = express.Router();
//este archivo gestiona las peticiones que se queden hacer a /api/products
router.get('/', list);
router.get('/:id', listProduct);
router.post('/', insertProduct);
router.put('/:id', alterProduct);
router.delete('/:id', deleteProduct);

function list(req,res, next){
      
      controller.list()
            .then((lista) => {
                  response.success(req,res,lista,200);
            }).catch(next);
            
}

function listProduct(req, res, next){
      controller.listProduct(req.params.id)
            .then(product =>{
                  response.success(req, res, product, 200);
            }).catch(next)
}

function insertProduct(req, res, next){
      controller.insertProduct(req.body,null)
            .then((data => {
                  response.success(req, res, data, 201)
            })).catch(next)
}

function alterProduct(req, res, next){
      controller.insertProduct(req.body,req.params.id)
            .then((data => {
                  response.success(req, res, data, 202)
            })).catch(next)
}

function deleteProduct(req, res, next){
      controller.deleteProduct(req.params.id)
            .then(product =>{
                  response.success(req, res, product, 200);
            }).catch(next)
}     

module.exports = router