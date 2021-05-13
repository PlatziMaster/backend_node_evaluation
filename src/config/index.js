require("dotenv").config();

const validMongoCon = {
  mongodb: "mongodb",
  srv: "mongodb+srv",
};

function getMongoCon(str) {
  if (str == validMongoCon.srv) return validMongoCon.srv;
  return validMongoCon.mongodb;
}

const dbConnection = getMongoCon(process.env.MONGO_CONNECTION);

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASSWORD,
  dbHost: process.env.MONGO_HOST,
  dbName: process.env.MONGO_DB_NAME,
  dbPort: process.env.MONGO_PORT,
  dbConnection,
  dbConnectionIsSrv: dbConnection == validMongoCon.srv,
};

module.exports = { config };
