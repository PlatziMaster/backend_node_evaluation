"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = require("./config");
var db_1 = __importDefault(require("./lib/db"));
var product_routes_1 = require("./routes/product.routes");
var categories_routes_1 = require("./routes/categories.routes");
var CreateApp = /** @class */ (function () {
    function CreateApp() {
        this.apiPath = {
            homeRoute: '/',
            products: '/api/products',
            categories: '/api/categories'
        };
        this.app = express_1.default();
        this.port = config_1.config.port;
        this.db = new db_1.default();
        //Middlewares
        this.middlewares();
        //rutas de mi app
        this.routes();
    }
    Object.defineProperty(CreateApp.prototype, "getApp", {
        get: function () {
            return this.app;
        },
        enumerable: false,
        configurable: true
    });
    CreateApp.prototype.middlewares = function () {
        //CORS
        this.app.use(cors_1.default());
        //read and bodyparser
        this.app.use(express_1.default.json());
    };
    CreateApp.prototype.routes = function () {
        this.app.use(this.apiPath.products, product_routes_1.productRouter);
        this.app.use(this.apiPath.categories, categories_routes_1.categorieRouter);
    };
    CreateApp.prototype.listenPort = function () {
        this.app.listen(this.port, function (err) {
            if (err) {
                console.error("Error: ", err);
                return err;
            }
        });
    };
    return CreateApp;
}());
exports.default = CreateApp;
