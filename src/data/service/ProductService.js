const Product = require('../schema/ProductSchema')

const get = async (paginated = false, page = 1, per_page = 10) => {
    return paginated ? 
        Product.find({})
                .sort({_id: -1})
                .limit(per_page)
                .skip((page - 1) * per_page) :
        
        Product.find({})
}

const find = async (id) => {
    return await Product.findById(id)
}

const store = async (input_obj) => {
    const product = new Product({ ...input_obj })
    return await product.save()
}

const update = async (id, updatedObject) => {
    const product = await Product.findById(id)

    if(product === null) {
        return null
    }
    let inputParams = {
        name: (updatedObject.name) ? updatedObject.name : product.name,
        image: (updatedObject.image) ? updatedObject.image : product.image,
        price: (updatedObject.price) ? updatedObject.price : product.price,
        description: (updatedObject.description) ? updatedObject.description : product.description,
        categoryId: (updatedObject.categoryId) ? updatedObject.categoryId : product.categoryId
    }

    await Product.findByIdAndUpdate(id, inputParams)
    return await Product.findById(id)
}

const remove = async (id) => {
    return await Product.findByIdAndDelete(id)
}

const filter_by_attr = async (attr_name, attr_value, paginated = false, page = 1, per_page = 10) => {
    let filter_obj = { }
    filter_obj[attr_name] = attr_value
    return paginated ? 
        Product.find({ ...filter_obj })
                .sort({_id: -1})
                .limit(per_page)
                .skip((page - 1) * per_page) :
        
        Product.find({ ...filter_obj })
}

module.exports = {
    get,
    find,
    store,
    update,
    remove,
    filter_by_attr
}