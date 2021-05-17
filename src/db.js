const db = require('mongoose');

db.Promise = global.Promise;
//'mongodb://127.0.0.1:27017/telegram'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('[db] Conected!')
}

module.exports = connect;