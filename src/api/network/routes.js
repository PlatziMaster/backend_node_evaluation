// const messagesRouter = require('../components/products/network');
const userRouter = require('../components/category/controller');

const routes = server => {
    // server.use('/product', messagesRouter);
    server.use('/api/category', userRouter);
};

module.exports = routes;
