// import MongoClient from'mongodb'
import mongoose from 'mongoose'

import { config } from './config'

export async function connect(){
    try {

        /*const client = await MongoClient.connect(config.dbHost,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })*/
        const db = await mongoose.createConnection(config.dbHost, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        console.log(`Database is connected in MongoAtlas!`)
        return db;
        
    } catch(e) {
        console.log(e)
    }
    
}