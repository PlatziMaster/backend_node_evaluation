const { config } = require('./config');
const createApp = require('./app');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const app = createApp();

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});

mongoClient.connect('mongodb+srv://juan:HCR3zEYSs2@cluster0.ulxlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true})
  .then(client => {
    console.log('Conected to Database')
    const db = client.db('platzi-master-prueba')
    const productsCollection = db.collection('products')

    app.set('views', './views')
    app.set('view engine', 'ejs')

    app.use(express.static('public'))

    app.use(bodyParser.json())

    // Read
    app.get('/', (req, res) => {
      // res.sendFile(__dirname + '/index.html')

      db.collection('products').find().toArray()
        .then(results => {
          console.log(results)
          res.render('index.ejs', { products: results })
        })
        .catch(error => console.log(error))
    })

    // Create
    app.post('/products', (req, res) => {
      productsCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    // Update
    app.put('/quotes', (req, res) => {
      console.log(req.body)
    })
  })
  .catch(error => console.error(error))
