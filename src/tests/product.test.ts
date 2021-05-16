import request from 'supertest'

import CreateApp from '../app'
import MongoDB from '../lib/db';
import { productModel } from '../lib/model/product';

const server = new CreateApp();
const db = new MongoDB();

server.listenPort();


describe("Tests to products", () => {

  describe("POST /api/products", () => {
    it("should create a new product", async (done) => {
      const newProduct = {
        name: "Product 1",
        price: 1000,
      };
      return request(server.getApp)
        .post("/api/products")
        .send(newProduct)
        .expect(201)
        .then(async ({ body }) => {
          await db.connect();
          const rta: any = await productModel.findOne({ _id: body.data._id });
          expect(body.data.name).toBe(rta.name);
          expect(body.data.price).toBe(rta.price);
          await db.closeDB();
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/products", () => {
    it("should return a list products", async (done) => {
      return request(server.getApp)
        .get("/api/products")
        .expect(200)
        .then(async ({ body }) => {
          expect(body.data.length).toBe(1);
          const product = body.data[0];
          await db.connect();
          const rta: any = await productModel.findOne({ _id: product._id });
          expect(product.name).toBe(rta.name);
          expect(product.price).toBe(rta.price);
          await db.closeDB();
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("PUT /api/products/{id}", () => {
    it("should return the product updated", async (done) => {
      await db.connect();
      const products: any = await productModel.find();
      expect(products.length > 0).toBe(true);
      const product = products[0];
      const changes = {
        price: 2000,
      };
       await db.closeDB();
      return request(server.getApp)
        .put(`/api/products/${product._id}`)
        .send(changes)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.name).toBe(product.name);
          expect(body.data.price).toBe(changes.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/products/{id}", () => {
    it("should return a product", async (done) => {
      await db.connect();
      const products: any = await productModel.find();
      expect(products.length > 0).toBe(true);
      const product = products[0];
      await db.closeDB();
      return request(server.getApp)
        .get(`/api/products/${product._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.name).toBe(product.name);
          expect(body.data.price).toBe(product.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("DELETE /api/products/{id}", () => {
    it("should delete a product", async (done) => {
      await db.connect();
      const products: any = await productModel.find();
      expect(products.length >= 0).toBe(true);
      const product = products[0];
      await db.closeDB();
      return request(server.getApp)
        .delete(`/api/products/${product._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.name).toBe(product.name);
          done();
        })
        .catch((err) => done(err));
    });
  });

});
