const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'shop'
let db

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())



app.get('/', (req, res) => {
    console.log("Solución al reto back end de platzi master por José Luis López Zaragoza");

    MongoClient.connect(url, {useUnifiedTopology: true , useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)

    // Storing a reference to the database so you can use it later
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)

    let resultsProducts;
    let resultsCategories;

    const cursorProducts = db.collection('products').find().toArray();
    const cursorCategories = db.collection('categories').find().toArray();

    cursorProducts.then(results =>{
        resultsProducts = results;
    }).catch(error => console.error(error));

    cursorCategories.then(results =>{
        resultsCategories = results;
    }).catch(error => console.error(error));

    res.render('index.ejs',{products: resultsProducts, categories: resultsCategories})


});
})
  // ADD YOUR ROUTES
  return app;

}

module.exports = createApp;
