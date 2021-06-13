const { config } = require('./config');
const createApp = require('./app');
const categoriesApi = require('./routes/categories');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  } else {
    console.log(`Listening http://localhost:${config.port}`);
  }
});



categoriesApi(app);

//test root directory

app.get('/', (req,res) =>{
  res.send('Hello Platzi master.')
})
