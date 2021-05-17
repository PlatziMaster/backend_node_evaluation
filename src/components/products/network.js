const express = require('express');

const controller = require('./index')
const response = require("../../network/response");

const router = express.Router();

router.get('/', list);
router.get('/:id', listProduct);


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

      

module.exports = router