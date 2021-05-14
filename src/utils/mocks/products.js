const productsMock = [{
    "_id": "609cac0d1495bc25487cac0d",
    "product": {
        "name": "Treasure chest",
        "price": 1500,
        "description": "Treasure chest made with love, and cardboard",
        "categoryId": "609d61139696221adc7c7634",
        "image": "https://foldoutfunblog.files.wordpress.com/2013/03/treasurechest10.jpg"
    },
    "_id": "609d61139696221adc7c7634",
    "product": {
        "name": "Lego Mindstorm",
        "price": 200,
        "description": "Robotic development kit by lego",
        "categoryId": "609cac0d1495bc25487cac0d",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71iQLKdNnpL._AC_SL1500_.jpg"
    }
}];

class ProductServiceMock {
    async getProducts() {
      return Promise.resolve(productsMock);
    }

    async getProduct() {
      return Promise.resolve(productsMock[0]);
    }
  
    async createProduct() {
      return Promise.resolve(productsMock[0]);
    }
  }
  
  module.exports = {
    productsMock,
    ProductServiceMock
  };