const Category = require('../schema/CategorySchema')

const get = async (paginated = false, page = 1, per_page = 10) => {
    return paginated ? 
        Category.find({})
                .sort({_id: -1})
                .limit(per_page)
                .skip((page - 1) * per_page) :
        
        Category.find({})
}

const find = async (id) => {
    return await Category.findById(id)
}

const store = async (input_obj) => {
    const category = new Category({ ...input_obj })
    return await category.save()
}

const update = async (id, updatedObject) => {
    const category = await Category.findById(id)

    if(category === null) {
        return null
    }
    let inputParams = {
        name: (updatedObject.name) ? updatedObject.name : category.name,
        image: (updatedObject.image) ? updatedObject.image : category.image,
    }

    await Category.findByIdAndUpdate(id, inputParams)
    return await Category.findById(id)
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

const remove = async (id) => {
    return await Category.findByIdAndDelete(id)
}

module.exports = {
    get,
    find,
    store,
    update,
    remove,
    filter_by_attr
}