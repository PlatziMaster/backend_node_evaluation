const Model = require('../../models/product');

function addProduct(product){
  const newProduct = new Model(product);
  newProduct.save();
}

function getProducts(){
  return new Promise((resolve, reject)=>{
    const products = Model.find();
    resolve(products);
  });
}

function oneProduct(filterProduct){
  return new Promise((resolve, reject)=>{
    let filter = {};
    if(filterProduct !== null){
      fileter = {
        name: filterProduct
      };
    }
    const product = Model.find(filter);
      resolve(product);
  });
}

function getProductsCat(filterCat){
  return new Promise((resolve, reject)=>{
    let filter = {};
    if(filterCat !== null){
      filter = {
        category: filterCat
      }
    }
    const products = Model.find(filter)
      .populate('category')
      .exce((err, populate)=>{
        if(err){
          reject(err);
          return false;
        }
        resolve(populate);
      });
      resolve(products)
  });
}

async function updatePrice(id, price){
  const foundProduct = await Model.findById({
    _id: id
  });
  foundProduct.price = price;
  const newPrice = await foundProduct.save();
  return newPrice;
}

function removeProduct(id){
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addProduct,
  list: getProducts,
  one: oneProduct,
  price: updatePrice,
  remove: removeProduct,
  listCat: getProductsCat
};