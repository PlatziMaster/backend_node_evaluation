const { config } = require('./config');
const createApp = require('./app');
const Product = require("./models/product")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = createApp();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get("/api/products/", (req, res) => {
  Product.find({}, (err, products) => {
    if(err) return res.status(500).send({message: err})
    res.status(200).send({results: products})
  })
});

app.get("/api/products/:productId", (req, res) => {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if(err) return res.status(500).send({message: err})
    if(!product) return res.status(404).send({message: "Product not found."})
    res.status(200).send({product: product})
  })
});

app.delete("/api/products/:productId", (req, res) => {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if(err) return res.status(500).send({message: err})
    if(!product) return res.status(404).send({message: "Product not found."})

    product.remove(err => {
      if(err) return res.status(500).send({message: "There was a problem deleting this product."})
      res.status(200).send({message: "Product deleted successfuly."})
    })

  })
})

app.put("/api/products/:productId", (req, res) => {
  const productId = req.params.productId
  const data = req.body
  Product.findByIdAndUpdate(productId, data, {new: true}, (err, productUpdated) => {
    if(err) return res.status(500).send({message: err})
    res.status(200).send(productUpdated)
  })
})

app.post("/api/products/", (req, res) => {
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.categoryId = req.body.categoryId;
  product.description = req.body.description;
  product.save((err, productStored) => {
    if(err){ res.status(500).send({message: err}) }
    res.send({product: productStored});
  })
});

mongoose.connect('mongodb://mongo:27017/products',  {
  "auth": { "authSource": "admin" },
  "user": "root",
  "pass": "root",
  "useMongoClient": true
  }, (err, res) => {
  if(err) throw err
  console.log('DB Connected.')
  app.listen(config.port, err => {
    console.log('Server listening at port 3000.')
    if (err) {
      console.error("Error: ", err);
      return;
    }
  });
})

