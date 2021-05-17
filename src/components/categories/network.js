const express = require('express');

const controller = require('./index')
const response = require("../../network/response");

const router = express.Router();

router.get('/', list);
router.get('/:id', listCategorie);
router.post('/', insertCategorie);
router.put('/:id', alterCategorie);
router.delete('/:id', deleteCategorie);

function list(req,res, next){
      
      controller.list()
            .then((lista) => {
                  response.success(req,res,lista,200);
            }).catch(next);
            
}

function listCategorie(req, res, next){
      controller.listCategorie(req.params.id)
            .then(categorie =>{
                  response.success(req, res, categorie, 200);
            }).catch(next)
}

function insertCategorie(req, res, next){
      controller.insertCategorie(req.body,null)
            .then((data => {
                  response.success(req, res, data, 201)
            })).catch(next)
}

function alterCategorie(req, res, next){
      controller.insertCategorie(req.body,req.params.id)
            .then((data => {
                  response.success(req, res, data, 202)
            })).catch(next)
}

function deleteCategorie(req, res, next){
      controller.deleteCategorie(req.params.id)
            .then(product =>{
                  response.success(req, res, product, 200);
            }).catch(next)
}  

module.exports = router