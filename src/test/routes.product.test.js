const assert = require('assert');
const proxyquire = require('proxyquire');

const { productsMock, ProductServiceMock } = require('../utils/mocks/products.js');
const testServer = require('../utils/test-server');

describe('routes - products', function() {
  const route = proxyquire('../routes/products', {
    '../services/products': ProductServiceMock
  });

  const request = testServer(route);
  describe('GET /json/api/products/', function() {
    it('should respond with status 200', function(done) {
      request.get('/json/api/products/').expect(200, done);
    });

    it('should respond with the list of movies', function(done) {
      request.get('/json/api/products/').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productsMock,
          message:  "Products list"
        });

        done();
      });
    });
  });

  describe('GET /json/api/products/609d61139696221adc7c7634', function() {
    it('should respond with status 200', function(done) {
      request.get('/json/api/products/609d61139696221adc7c7634').expect(200, done);
    });

    it('should respond with one movie', function(done) {
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