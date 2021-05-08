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
console.log(url)
let collection;
const db_n = "platzi_test";
const app = express();


app.listen(5000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(db_n);
        collection = database.collection("categories");
        console.log("Connected to `" + db_n + "`!");
    });
});

app.post("/categories/", (request, response) => {
    console.log(request.query)
    // const doc = { name:"nombre", Image: "image" };
    collection.insertOne(request.query, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
}); 

app.get("/categories", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/categories/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectID(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.delete("/categories/:id", (request, response) => {
    collection.deleteOne({ "_id": new ObjectID(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


// module.exports = createApp;