const assert = require('assert');
const proxyquire = require('proxyquire');

const { productsMock, ProductServiceMock } = require('../utils/mocks/products.js');
const testServer = require('../utils/test-server');

describe('routes - products', function() {
  const route = proxyquire('../routes/products', {
    '../services/products': ProductServiceMock
  });

  const request = testServer(route);
  describe('/json/api/products/', function() {
    it('should respond with status 200', function(done) {
      request.get('/json/api/products/').expect(200, done);
    });

    it('should respond with the list of products', function(done) {
      request.get('/json/api/products/').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productsMock,
          message:  "Products list"
        });

        done();
      });
    });

    it('should insert one product', function(done) {
      request.post('/json/api/products').send({
          "name": "Lego Mindstorm",
          "price": 200,
          "description": "Robotic development kit by lego",
          "categoryId": "609dd6107049e82ba45615dc",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71iQLKdNnpL._AC_SL1500_.jpg"
        }).end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productsMock[0],
          message:  "Product was created succesfully!"
        });

        done();
      });
    });

    it('should update the product', function(done) {
      request.put('/json/api/products/609dd6107049e82ba45615dc').send({
          "name": "Lego Mindstorm",
          "price": 200,
          "description": "Robotic development kit by lego",
          "categoryId": "609dd6107049e82ba45615dc",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71iQLKdNnpL._AC_SL1500_.jpg"
        }).end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productsMock[0]._id,
          message:  "Product was updated succesfully!"
        });

        done();
      });
    });

    it('should delete the product', function(done) {
      request.delete('/json/api/products/609dd6107049e82ba45615dc').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productsMock[0]._id,
          message:  "Product was deleted succesfully!"
        });

        done();
      });
    });
  });

  describe('/json/api/products/609d61139696221adc7c7634', function() {
    it('should respond with status 200', function(done) {
      request.get('/json/api/products/609d61139696221adc7c7634').expect(200, done);
    });

    it('should respond with one product', function(done) {
      request.get('/json/api/products/609d61139696221adc7c7634').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productsMock[0],
          message:  "Product Detail"
        });

        done();
      });
    });
  });
});