const request = require("supertest");
const { MongoClient, ObjectId } = require("mongodb");

const { config } = require("../src/config");
const createApp = require("../src/app");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`;
const collection = 'categories';

describe("Tests to categories", () => {
  let app;
  let database;
  let server;

  beforeAll(async () => {
    app = createApp();
    const port = 3001;
    server = app.listen(port);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    server.close();
    database.dropDatabase();
  });

  describe("POST /api/categories", () => {
    it("should create a new category", async (done) => {
      const newCategory = {
        name: "Category 1",
        image: 'https://via.placeholder.com/150',
      };
      return request(app)
        .post("/api/categories")
        .send(newCategory)
        .expect(201)
        .then(async ({ body }) => {
          const rta = await database.collection(collection).findOne({ _id: ObjectId(body._id) });
          expect(body.name).toBe(rta.name);
          expect(body.image).toBe(rta.image);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/categories", () => {
    it("should return a list categories", async (done) => {
      return request(app)
        .get("/api/categories")
        .expect(200)
        .then(async ({ body }) => {
          expect(body.length).toBe(1);
          const model = body[0];
          const rta = await database.collection(collection).findOne({ _id: ObjectId(model._id) });
          expect(model.name).toBe(rta.name);
          expect(model.image).toBe(rta.image);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("PUT /api/categories/{id}", () => {
    it("should return the category updated", async (done) => {
      const categories = await database.collection(collection).find().toArray();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      const changes = {
        name: 'change',
      };
      return request(app)
        .put(`/api/categories/${category._id}`)
        .send(changes)
        .expect(200)
        .then(({ body }) => {
          expect(body.name).toBe(changes.name);
          expect(body.price).toBe(category.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/categories/{id}", () => {
    it("should return a categories", async (done) => {
      const categories = await database.collection(collection).find().toArray();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      return request(app)
        .get(`/api/categories/${category._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body.name).toBe(category.name);
          expect(body.image).toBe(category.image);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/categories/{id}/products", () => {
    
    it("should return a list products by category", async (done) => {
      const categories = await database.collection(collection).find().toArray();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      const products = [
        { name: "Red",  price: 200, categoryId: `${category._id}` },
        { name: "Blue", price: 300, categoryId: `${category._id}` },
        { name: "Leon", price: 400 }
      ];
      await database.collection('products').insertMany(products);
      return request(app)
        .get(`/api/categories/${category._id}/products`)
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toBe(2);
          expect(body[0].name).toBe(products[0].name);
          expect(body[1].name).toBe(products[1].name);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("DELETE /api/categories/{id}", () => {
    it("should delete a category", async (done) => {
      const categories = await database.collection(collection).find().toArray();
      expect(categories.length > 0).toBe(true);
      const category = categories[0];
      return request(app)
        .delete(`/api/categories/${category._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body).toBe(true);
          done();
        })
        .catch((err) => done(err));
    });
  });

  
});
