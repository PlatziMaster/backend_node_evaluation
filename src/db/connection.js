const { MongoClient } = require('mongodb');
const { config } = require('../config/index');

const { dev, dbUser, dbPassword, dbHost, dbName, dbConnection, dbPort } = config;

let uri = `${dbConnection}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

if (!dev) {
	uri = `${dbConnection}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
}

const client = new MongoClient(uri, 
	{ useUnifiedTopology: true },
	{ useNewUrlParser: true }, { connectTimeoutMS: 30000 }
);

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
