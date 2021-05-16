import mongoose from 'mongoose';
import { config } from '../config';

export default class MongoDB {

  public dbConnect;
  public dbName: string;

  public constructor() {
    this.dbConnect = this.connect();
    this.dbName = "platziMaster-project";
  }

  async connect(): Promise<void> {
    if ( mongoose.connection.readyState == 0 ) {
      try {
        await mongoose.connect(`${config.dbConnection}//${config.dbUser}:${config.dbPassword}${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        });
        console.log("DB Online");
      } catch (error) {
        console.log(error);
        throw new Error("DB Error");
      }
    }
  }

  //CloseDB connection
  async closeDB(): Promise<void> {
    try {
      await mongoose.connection.close().then(() => console.log("DB close"));
    } catch (error) {
      console.log(error)
    }
  }
}