const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');


//Routes
const productsRoutes = require('./routes/api/products_controller');
const categoriesRoutes = require('./routes/api/categories_controller');

const app = express();

//BodyParser Middleware 
app.use(express.json());

//connect to mongo
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
})
    .then(() => console.log('***MongoDBAtlas conectado!'))
    .catch(err => console.log(err));
//User routes 
app.use('/api/products', productsRoutes);
app.use('/api/categories', categoriesRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`***Server corriendo en el puerto: ${PORT}`));