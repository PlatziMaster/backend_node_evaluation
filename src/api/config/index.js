require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbURL: 'mongodb+srv://dbUser:dbUserPass@projectscategories.ktuh3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
};

module.exports = { config };
