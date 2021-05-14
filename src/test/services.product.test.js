const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { productsMock } = require('../utils/mocks/products');

describe('services - products', function() {
  const ProductService = proxyquire('../services/products', {
    '../lib/mongo': MongoLibMock
  });

  const productService = new ProductService();

  describe('when getProducts method is called', async function() {
    it('should call the getall MongoLib method', async function() {
      await productService.getProducts({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of products', async function() {
      const result = await productService.getProducts({});
      const expected = productsMock;
      assert.deepStrictEqual(result, expected);
    });
  });
});