const { config } = require("./config");
const createApp = require("./app");
const db = require("./db");

const app = createApp();

async function run() {
  try {
    await db.connect(); // Initialize the db connection
  } catch (error) {
    console.error("Error: Cant connect to database ", error);
    return;
  }
  app.listen(config.port, (err) => {
    if (err) {
      console.error("Error: ", err);
      return;
    }
    console.log(`app listening at port ${config.port}`);
  });
}

run();
