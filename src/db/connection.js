const { MongoClient } = require('mongodb');

const USER = process.env.MONGO_USER;
const PASS = process.env.MONGO_PASSWORD;
const HOST = process.env.MONGO_HOST;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const uri = `mongodb+srv://${USER}:${PASS}@${HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function testConnection() {
	try {
		await client.connect();

		await client.db("admin").command({ping: 1});
		console.log("Connected sucefully")
	} finally {
		await client.close();
	}
}
testConnection().catch(console.dir);
module.exports = { 
	client: client, 
	testConnection: testConnection,
};
