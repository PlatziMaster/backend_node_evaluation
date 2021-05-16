import MongoClient from'mongodb'

import { config } from './config'

export async function connect(){
    try {
        const client = await MongoClient.connect(config.dbString, { useUnifiedTopology: true }) 
        const db = client.db('platzi-master')
        console.log(`Database is connected in MongoAtlas!`)
        return client;
        
    } catch(e) {
        console.log(e)
    }
    
}