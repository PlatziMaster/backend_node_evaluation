const ProductService = require('../service/ProductService')
const get_paginate_params = require('../middleware/query_pagination')

const index = async (req, res) => {
    const { paginate, page, per_page } = get_paginate_params(req)
    let pageOptions = {
        paginate
    }

    if(paginate) {
        pageOptions.page = page
        pageOptions.per_page = per_page
    }

    try {
        products = await ProductService.get(paginate, page, per_page)
        response = {
            data: products,
            pageOptions: pageOptions
        }
        status_code = 200
    }
    catch(error) {
        console.error(error)
        status_code = 422
        response = {
            error: true,
            message: 'Cant\'t proccess the request'
        }
    }

    return res.status(status_code).json(response)
}

const find = async (req, res) => {
    try {
        response = await ProductService.find(req.params.id)
        status_code = 200
    }
    catch(error) {
        console.error(error)
        status_code = 422
        response = {
            error: true,
            message: 'Cant\'t proccess the request'
        }
    }

    return res.status(status_code).json(response)
}

const store = async (req, res) => {
    try {
        inputParams = req.body
        response = await ProductService.store(inputParams)
        status_code = 200
    }
    catch(error) {
        console.error(error)
        status_code = 422
        response = {
            error: true,
            message: 'Cant\'t proccess the request'
        }
    }

    return res.status(status_code).json(response)
}

const update = async (req, res) => {
    try {
        const id = req.params.id
        const inputParams = req.body
        response = await ProductService.update(id, inputParams)
        status_code = 200
    }
    catch(error) {
        console.error(error)
        status_code = 422
        response = {
            error: true,
            message: 'Cant\'t proccess the request'
        }
    }

    return res.status(status_code).json(response)
}

const remove = async (req, res) => {
    try {
        await ProductService.remove(req.params.id)
        response = {
            error: false,
            message: 'success'
        }
        status_code = 200
    }
    catch(error) {
        console.error(error)
        status_code = 422
        response = {
            error: true,
            message: 'Cant\'t proccess the request'
        }
    }

    return res.status(status_code).json(response)
}

module.exports = {
    index,
    find,
    store,
    update,
    remove
}