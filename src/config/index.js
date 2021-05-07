require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASSWORD,
  dbHost: process.env.MONGO_HOST || 'http://localhost',
  dbName: process.env.MONGO_DB_NAME,
  dbPort: process.env.MONGO_PORT,
  dbConnection: process.env.MONGO_CONNECTION,
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
};

module.exports = { config };
