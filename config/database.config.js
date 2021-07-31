module.exports = {
  url:
    "mongodb+srv://" +
    process.env.MONGO_USER +
    ":" +
    process.env.MONGO_PASSWORD +
    "@" +
    process.env.MONGO_HOST +
    "/" +
    process.env.MONGO_DB_NAME +
    "?retryWrites=true&w=majority"
};
