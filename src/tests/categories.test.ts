import request from 'supertest'
import CreateApp from "../app";
import MongoDB from "../lib/db";
import { categorieModel } from '../lib/model/categories';
import { productModel } from '../lib/model/product';

const server = new CreateApp();
const db = new MongoDB();

server.listenPort();


describe("Tests to categories", () => {

  describe("POST /api/categories", () => {
    it("should create a new category", async (done) => {
      const newCategory = {
        "name": "Category 1",
        "image": 'https://via.placeholder.com/150',
      };
      try {
        return await request(server.getApp)
          .post("/api/categories")
          .send(newCategory)
          .set('Accept', 'application/json')
          .expect(201)
          .then(async ({ body }) => {
            await db.connect();
            const rta: any = await categorieModel.findOne({ _id: body.data._id });
            expect(body.data.name).toBe(rta.name);
            expect(body.data.image).toBe(rta.image);
            await db.closeDB();
            done();
          })
      } catch (error) {
        done(error);

      }
    });
  });

  describe("GET /api/categories", () => {
    it("should return a list categories", async (done) => {
      return request(server.getApp)
        .get("/api/categories")
        .expect(200)
        .then(async ({ body }) => {
          // expect(body.length).toBe(1);
          const model = body.data[0];
          await db.connect();
          const rta: any = await categorieModel.findOne({ _id: model._id });
          expect(model.name).toBe(rta.name);
          expect(model.image).toBe(rta.image);
          await db.closeDB();
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("PUT /api/categories/{id}", () => {
    it("should return the category updated", async (done) => {
      await db.connect();
      const categories: any = await categorieModel.find();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      const changes = {
        name: 'change',
      };
      await db.closeDB();
      return request(server.getApp)
        .put(`/api/categories/${category._id}`)
        .send(changes)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.name).toBe(changes.name);
          expect(body.data.price).toBe(category.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/categories/{id}", () => {
    it("should return a categories", async (done) => {
      await db.connect();
      const categories: any = await categorieModel.find();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      await db.closeDB();
      return request(server.getApp)
        .get(`/api/categories/${category._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.name).toBe(category.name);
          expect(body.data.image).toBe(category.image);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/categories/{id}/products", () => {

    it("should return a list products by category", async (done) => {
      await db.connect();
      const categories: any = await categorieModel.find();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      const products = [
        { name: "red",  price: 200, categoryId: `${category._id}` },
        { name: "blue", price: 300, categoryId: `${category._id}` },
        { name: "leon", price: 400 }
      ];
      await productModel.insertMany(products);
      await db.closeDB();
      return request(server.getApp)
        .get(`/api/categories/${category._id}/products`)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.length).toBe(2);
          expect(body.data[0].name).toBe(products[0].name);
          expect(body.data[1].name).toBe(products[1].name);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("DELETE /api/categories/{id}", () => {
    it("should delete a category", async (done) => {
      await db.connect();
      const categories: any = await categorieModel.find();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      await db.closeDB();
      return request(server.getApp)
        .delete(`/api/categories/${category._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body.data.name).toBe(categories[0].name);
          done();
        })
        .catch((err) => done(err));
    });
  });

})
