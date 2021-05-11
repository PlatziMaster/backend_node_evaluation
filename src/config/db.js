const { config } = require('./index');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const connectDB = async () => {
	try {
		await mongoose.connect(config.dbConnection, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connection Verified');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;