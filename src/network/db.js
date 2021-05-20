const db = require('mongoose');
db.Promise = global.Promise; // To tell mongo to use js native's Promise system.

const connectDB = URI => {
  console.log('[db] Attempting DB connection');
  db
  .connect(URI, {
    useNewUrlParser: true, // Maneja compatililidad con servidor.
    useUnifiedTopology: true // If not added, an error thrown will say to add it.
  })
  .then(() => console.log('[db] DB successfully connected'))
  .catch(err => console.log('[db] Error connecting to DB:', err));
};

module.exports = connectDB;
