const { config } = require('./config');
const createApp = require('./app');

const { mongoose } = require('./db/mongoose');
const { Category } = require('./models/category');
const { Product } = require('./models/product');
var {ObjectID} = require('mongodb');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});

app.post('/api/categories/', (req, res) => {
  const category = new Category(req.body);
  category.save().then(() => {
    res.status(201).send(category);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/api/categories/', (req, res) => {
  Category.find({}).then((categories) => {
    res.send(categories);
  }).catch((e) => {
    res.status(500).send();
  });
});

app.get('/api/categories/:id', (req, res) => {
  const _id = req.params.id;

  if(!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  Category.findById(_id).then((category) => {
    if (!category) {
      return res.status(404).send();
    }
    res.send({category});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/api/categories/:id', (req, res) => {
  const _id = req.params.id;

   if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  const changes = req.body;

  Category.findOneAndUpdate({
    _id: _id,
  }, {$set: changes}, {new: true}).then((category) => {
    if (!category) {
      return res.status(404).send();
    }
    res.send({category});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/api/categories/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!ObjectID.isValid(_id)) {
      return res.status(404).send();
    }
    const category = await Category.findOneAndRemove({
      _id: _id
    });
    if (!category) {
      return res.status(404).send();
    }
    res.send({category});
  } catch (e) {
    res.status(400).send();
  }
});

app.get('/api/categories/:id/products', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!ObjectID.isValid(_id)) {
      return res.status(404).send();
    }
    Product.find({
      categoryId: _id
    }).then((products) => {
      res.send(products);
    }).catch((e) => {
      res.status(500).send();
    });
  } catch (e) {
    res.status(400).send();
  }
});

app.post('/api/products/', async (req, res) => {

  try {
    const product = new Product(req.body);
    await product.save();

    if (ObjectID.isValid(product.categoryId)) {
      const category = await Category.findById({_id: product.categoryId});
      category.products.push(product);
      await category.save();
    }
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get('/api/products/', (req, res) => {
  Product.find({}).then((products) => {
    res.send(products);
  }).catch((e) => {
    res.status(500).send();
  });
});

app.get('/api/products/:id', (req, res) => {
  const _id = req.params.id;

  if(!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  Product.findById(_id).then((product) => {
    if (!product) {
      return res.status(404).send();
    }
    res.send({product});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/api/products/:id', (req, res) => {
  const _id = req.params.id;

   if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  const changes = req.body;

  Product.findOneAndUpdate({
    _id: _id,
  }, {$set: changes}, {new: true}).then((product) => {
    if (!product) {
      return res.status(404).send();
    }
    res.send({product});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!ObjectID.isValid(_id)) {
      return res.status(404).send();
    }
    const product = await Product.findOneAndRemove({
      _id: _id
    });
    if (!product) {
      return res.status(404).send();
    }
    res.send({product});
  } catch (e) {
    res.status(400).send();
  }
});