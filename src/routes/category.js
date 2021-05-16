const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const {config} = require("../config");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const uri = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`;
const uri = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}/PRUEBA_TECNICA_PLATZI_MASTER?retryWrites=true&w=majority`;
const client = new MongoClient(uri)


router.get('/',async function(req,res){
    let output;
    try{
        await client.connect();
        query = await client.db(config.dbName).collection("categories").find();
        output = await query.toArray();
    }catch(error){
        console.log(error);
        output = error;
    }
    res.send(output);
    
});


router.get('/:id',async function(req,res){
    let output;
    let id = req.params.id;
    try{
        await client.connect();
        query = await client.db(config.dbName).collection("categories").find({_id: ObjectId(id)});
        output = await query.toArray();
    }catch(error){
        output = error;
    }
    if (output === []){
        output = "oops algo salio mal, parece que el dato no esta en la db"
    }
    res.send(output);
});

router.get('/:id/products',async function(req,res){
    let output;
    let id = req.params.id;
    try{
        await client.connect();
        query = await client.db(config.dbName).collection("products").find({categoryId: id});
        output = await query.toArray();
    }catch(error){
        output = error;
    }
    if (output === []){
        output = "oops algo salio mal, parece que el dato no esta en la db"
    }
    res.send(output);
});

router.post('/',async function(req,res){
    let category = req.body;
    let output;
    if (category["name"] && category["image"]){
        try{
            await client.connect();
            query = await client.db(config.dbName).collection("categories").insert(category);
            output = category;
            res.status(201)
        }catch(error){
            output = "algo salio mal";
        }
    }else{
        output = "categoria no valida";
    }
    res.send(output);
});


router.put('/:id',async function(req,res){
    let id = req.params.id;
    let category = req.body;
    let output;
    if (category["name"] && category["image"]){
        try{
            await client.connect();
            query = await client.db(config.dbName).collection("categories").update({_id: ObjectId(id)},category);
            output = category;
        }catch(error){
            output = "algo salio mal";
        }
    }else{
        output = "categoria no valida";
    }
    res.send(output);
});


router.delete('/:id',async function(req,res){
    let output;
    let id = req.params.id;
    try{
        await client.connect();
        query = await client.db(config.dbName).collection("categories").deleteOne({_id: ObjectId(id)});
        output = "dato eliminado con exito";
    }catch(error){
        output = error;
    }
    res.send(output)
});

module.exports = router