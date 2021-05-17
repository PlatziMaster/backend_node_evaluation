const request = require("supertest");
const { MongoClient, ObjectId } = require("mongodb");

const { config } = require("../src/config");
const createApp = require("./../src/app");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}?retryWrites=true&w=majority`;
const collection = 'products';

describe("Tests to products", () => {
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
    //database.dropDatabase();
  });

  describe("POST /api/products", () => {
    it("should create a new product", async (done) => {
      const newProduct = {
        name: "Product 1",
        price: 1000,
      };
      return request(app)
        .post("/api/products")
        .send(newProduct)
        .expect(201)
        .then(async ({ body }) => {
          const rta = await database.collection(collection).findOne({ _id: ObjectId(body._id) });
          expect(body.name).toBe(rta.name);
          expect(body.price).toBe(rta.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/products", () => {
    it("should return a list products", async (done) => {
      return request(app)
        .get("/api/products")
        .expect(200)
        .then(async ({ body }) => {
          expect(body.length).toBe(1);
          const product = body[0];
          const rta = await database.collection(collection).findOne({ _id: ObjectId(product._id) });
          expect(product.name).toBe(rta.name);
          expect(product.price).toBe(rta.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("PUT /api/products/{id}", () => {
    it("should return the product updated", async (done) => {
      const products = await database.collection(collection).find().toArray();
      expect(products.length > 0).toBe(true);
      const product = products[0];
      const changes = {
        price: 2000,
      };
      return request(app)
        .put(`/api/products/${product._id}`)
        .send(changes)
        .expect(200)
        .then(({ body }) => {
          expect(body.name).toBe(product.name);
          expect(body.price).toBe(changes.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET /api/products/{id}", () => {
    it("should return a product", async (done) => {
      const products = await database.collection(collection).find().toArray();
      expect(products.length > 0).toBe(true);
      const product = products[0];
      return request(app)
        .get(`/api/products/${product._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body.name).toBe(product.name);
          expect(body.price).toBe(product.price);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("DELETE /api/products/{id}", () => {
    it("should delete a product", async (done) => {
      const products = await database.collection(collection).find().toArray();
      expect(products.length > 0).toBe(true);
      const product = products[0];
      return request(app)
        .delete(`/api/products/${product._id}`)
        .expect(200)
        .then(({ body }) => {
          expect(body).toBe(true);
          done();
        })
        .catch((err) => done(err));
    });
  });

  
});
