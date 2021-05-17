"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
exports.config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    dbUser: process.env.MONGO_USER,
    dbPassword: process.env.MONGO_PASSWORD,
    dbHost: process.env.MONGO_HOST,
    dbName: process.env.MONGO_DB_NAME,
    dbPort: process.env.MONGO_PORT,
    dbConnection: process.env.MONGO_CONNECTION,
};
alert(console.log(localhost))