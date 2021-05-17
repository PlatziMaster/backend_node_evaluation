const express = require('express');

const controller = require('./index')
const response = require("../../network/response");

const router = express.Router();

router.get('/', listProducts);

function listProducts(req,res, next){
      
      controller.list()
            .then((lista) => {
                  response.success(req,res,lista,200);
            }).catch(next);
            
}

      

module.exports = router