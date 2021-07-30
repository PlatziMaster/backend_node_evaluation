const store = require('./store');

function addProduct(name, price, description,category, image){
  return new Promise((resolve, reject)=>{
    if(!name){
      console.error('[Product controller]: '+ 'There is not name for a new product');
      reject('Wrong data');
      return false;
    }

    //Save an image 
    let urlImage =  '';
    if(image){
      urlImage = 'http://localhost:3000/app/files'+image.name;
    }

    //Save a new product
    const product = {
      name: name,
      price: price, 
      description: description,
      category: category
    };

    store.add(product);
    resolve(product);

  });
}

function getProducts(){
  return new Promise((resolve, reject)=>{
    resolve(store.list());
  });
}

function getProduct(filterProduct){
  return new Promise((resolve, reject)=>{
    resolve(store.one(filterProduct));
  });
}

function getProdByCat(filterCategory){
  return new Promise((resolve, reject)=>{
    resolve(store.listCat(filterCategory));
  });
}

function updateProduct(id,price){
  return new Promise((resolve, reject)=>{
    if(!id){
      reject('Invalid data');
      return false;
    }
    resolve(store.price(id, price));
  });
}

function deleteProduct(id){
  return new Promise((reject, resolve)=>{
    if(!id){
      reject('Wrong data, invalid id');
      return false;
    }
    store.remove(id)
      .then(()=>{
        resolve();
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  getProdByCat, 
  updateProduct,
  deleteProduct
}