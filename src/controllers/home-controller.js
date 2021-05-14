const HomeController = {
    async index (request, response) {
        return response.send({
            message: 'Welcome to the categories and products API',
        })
    }
}

module.exports = HomeController