import express, { Application } from 'express';
import cors from 'cors'
import { config } from './config';
import MongoDB from './lib/db';
import { productRouter } from './routes/product.routes';
import { categorieRouter } from './routes/categories.routes';

export default class CreateApp {

  private app: Application
  private port;
  private db: any;
  private apiPath = {
    homeRoute: '/',
    products: '/api/products',
    categories: '/api/categories'
  }

  constructor() {
    this.app = express();
    this.port = config.port;
    this.db = new MongoDB();

    //Middlewares
    this.middlewares();

    //rutas de mi app
    this.routes();
  }

  get getApp() {
    return this.app;
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //read and bodyparser
    this.app.use(express.json());

  }

  routes() {
    this.app.use(this.apiPath.products, productRouter );
    this.app.use(this.apiPath.categories, categorieRouter);

  }

  listenPort() {
    this.app.listen(this.port, err => {
      if (err) {
        console.error("Error: ", err);
        return err;
      }
    })
  }
}

