const sinon = require('sinon');

const { productsMock } = require('./products');

const getAllStub = sinon.stub();
getAllStub.withArgs('product').resolves(productsMock);

const createStub = sinon.stub().resolves(productsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};