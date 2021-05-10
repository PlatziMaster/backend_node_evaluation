import { MongoClient as MONGO_CLIENT } from 'mongodb';

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`

const client = new MongoClient(URI);

async function connectionTest() {
    try {

        await client.connect();

        await client.db(MONGO_DB_NAME).command({ping:1});
        console.log('succesfull connection')
    } finally {
        await client.close();
    }
}

connectionTest().catch(console.dir)

export const client = client;
export const connectionTest = connectionTest;