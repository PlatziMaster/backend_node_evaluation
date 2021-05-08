const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('bson');
require('dotenv').config({ path: 'variables.env' });
const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbConnection: process.env.DB_CONNECTION,
};
const url = `${config.dbConnection}://${config.dbHost}:${config.dbPort}`;
let collection;
const db_n = "platzi_test";
const app = express();

app.listen(5000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(db_n);
        console.log("Connected to `" + db_n + "`!");
    });
});

//  CATEGORIAS
app.post("/api/categories/", (request, response) => {
    
    collection = database.collection("categories");
    console.log(request.query)
    // const doc = { name:"nombre", Image: "image" };
    collection.insertOne(request.query, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}); 

app.get("/api/categories", (request, response) => {
    
    collection = database.collection("categories");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/api/categories/:id", (request, response) => {
    
    collection = database.collection("categories");
    collection.findOne({ "_id": new ObjectID(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.delete("/api/categories/:id", (request, response) => {
    collection = database.collection("categories");
    collection.deleteOne({ "_id": new ObjectID(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.put("/api/categories/:id", (request, response) => {
    collection = database.collection("categories"); 
    const up = {"_id":new ObjectID(request.params.id),"name":request.query.name,"image":request.query.image}
    console.log(up)
    collection.updateOne(({"_id":request.params.id}, up, function(err, res) {
        if (error) {
            throw err;
        }
        console.log("1 document updated");
    }));
    // collection.updateOne({"_id": new ObjectID(request.params.id)},up, (error, result) => {
    //     if(error) {
    //         return response.status(500).send(error);
    //     }
    // });

});
// PRODUCTOS
app.post("/api/products/", (request, response) => {
    
    collection = database.collection("products");
    console.log(request.query)
    collection.insertOne(request.query, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}); 

app.get("/api/products", (request, response) => {
    
    collection = database.collection("products");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/api/products/:id", (request, response) => {
    
    collection = database.collection("products");
    collection.findOne({ "_id": new ObjectID(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.delete("/api/products/:id", (request, response) => {
    collection = database.collection("products");
    collection.deleteOne({ "_id": new ObjectID(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
