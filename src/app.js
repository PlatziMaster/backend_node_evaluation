const express = require("express");
const cors = require("cors");
const { categoriesRoutes, productsRoutes } = require("./api");
const notFoundHandler = require("./middleware/notFoundHandler");
const {
    errorHandler,
    logErrors,
    wrapErrors,
} = require("./middleware/errorHandler");

function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    // ADD YOUR ROUTES
    categoriesRoutes(app);
    productsRoutes(app);
    app.use(notFoundHandler);

    app.use(logErrors);
    app.use(wrapErrors);
    app.use(errorHandler);

    return app;
}

module.exports = createApp;
