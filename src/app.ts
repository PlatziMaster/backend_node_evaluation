import express, { Application } from 'express';
import cors from 'cors'
import { config } from './config';
import MongoDB from './lib/db';

export default class CreateApp {

  private app: Application
  private port;
  private db: any;
  private apiPath = {
    homeRoute: '/',
    products: '/api/products',
    categories: '/api/categories/'
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

  middlewares() {
    //CORS
    this.app.use(cors());

    //read and bodyparser
    this.app.use(express.json());

  }

  routes() {
    // this.app.use(this.apiPath.products, );
    // this.app.use(this.apiPath.categories, );

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

