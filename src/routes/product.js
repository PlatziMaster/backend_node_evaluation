const express = require("express")
const router = express.Router()
const { MongoClient, ObjectId } = require("mongodb");
const {config} = require("../config");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const uri = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}/PRUEBA_TECNICA_PLATZI_MASTER?retryWrites=true&w=majority`;
const client = new MongoClient(uri)

router.get('/',async function(req,res){
    let output;
    try{
        await client.connect();
        query = await client.db(config.dbName).collection("products").find();
        output = await query.toArray();
    }catch(error){
        console.log(error);
        output = error;
    }
    res.send(output);
    
});

router.get('/:id',async function(req,res){
    let id = req.params.id;
    let output;
    try{
        await client.connect();
        query = await client.db(config.dbName).collection("products").find({_id:ObjectId(id)});
        output = await query.toArray();
    }catch(error){
        console.log(error);
        output = error;
    }
    res.send(output);
});

router.post('/',async function(req,res){
    let product = req.body;
    let output;
    if (product["name"] && product["image"] && product["price"] && product["description"] && product["categoryId"]){
        try{
            await client.connect();
            query = await client.db(config.dbName).collection("products").insert(product);
            output = product;
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
    let product = req.body;
    let output;
    if (product["name"] && product["image"] && product["price"] && product["description"] && product["categoryId"]){
        try{
            await client.connect();
            query = await client.db(config.dbName).collection("products").update({_id: ObjectId(id)},product);
            output = product;
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
        query = await client.db(config.dbName).collection("products").deleteOne({_id: ObjectId(id)});
        output = "dato eliminado con exito";
    }catch(error){
        output = error;
    }
    res.send(output)
});

module.exports = router