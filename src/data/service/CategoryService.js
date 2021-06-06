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

const store = async (category_obj) => {
    const category = new Category({
        name: category_obj.name,
        image: category_obj.image
    })
    return await category.save()
}

const update = async (id, updatedCategory) => {
    const category = await Category.findById(id)

    if(category === null) {
        return null
    }
    let inputCategory = {
        name: (updatedCategory.name) ? updatedCategory.name : category.name,
        image: (updatedCategory.image) ? updatedCategory.image : category.image,
    }

    await Category.findByIdAndUpdate(id, inputCategory)
    return await Category.findById(id)
}

const remove = async (id) => {
    return await Category.findByIdAndDelete(id)
}

module.exports = {
    get,
    find,
    store,
    update,
    remove
}