const Product = require('../schema/ProductSchema')

const get = async (paginated = false, page = 1, per_page = 10) => {
    return paginated ? 
        Product.find({})
                .sort({_id: -1})
                .limit(per_page)
                .skip((page - 1) * per_page) :
        
        Product.find({})
        .sort({_id: -1})
}

const find = async (id) => {
    return await Product.findById(id)
}

const store = async (Product_obj) => {
    const Product = new Product({
        name: Product_obj.name,
        image: Product_obj.image
    })
    return await Product.save()
}

// TODO: Update

const remove = async (id) => {
    return await Product.findByIdAndDelete(id)
}

module.exports = {
    all,
    find,
    store,
    remove
}