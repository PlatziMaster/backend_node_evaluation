const mongoose = require('mongoose');
//url mongo atlas
const urldb = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;
mongoose.connect(urldb,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.on('error',console.error.bind(console),'Error al conectar MongoDb');
connection.once('open', function() {
    console.log('Conexion a Base de datos OK');
  });

module.exports = connection;