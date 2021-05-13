require("dotenv").config()

const config = {
	dev: process.env.NODE_ENV !== "production",
	port: process.env.PORT || 3000,
	MONGO_USER: process.env.MONGO_USER,
	MONGO_PASSWORD: process.env.MONGO_PASSWORD,
	MONGO_HOST: process.env.MONGO_HOST,
	MONGO_DB_NAME: process.env.MONGO_DB_NAME,
	MONGO_PORT: process.env.MONGO_PORT,
	MONGO_CONNECTION: process.env.MONGO_CONNECTION,
}

module.exports = { config }
