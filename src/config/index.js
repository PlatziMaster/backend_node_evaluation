require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASSWORD,
  dbHost: process.env.MONGO_HOST || '127.0.0.1',
  dbName: process.env.MONGO_DB_NAME || 'PlatziMasterTest',
  dbPort: process.env.MONGO_PORT || '27017',
  dbConnection: process.env.MONGO_CONNECTION,
};

module.exports = { config };

