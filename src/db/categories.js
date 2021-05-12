const DataConnection = require('../db/db')
const CollectionNameCategories = "categories";

exports.insertCategory = async (category)=>{
    const conn = new DataConnection(CollectionNameCategories);
    try {
        var result = await conn.insertOne(category);
        if (result.insertedId)
            return await this.getCategory(result.insertedId);
        return [];
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.getCategory = async (categoryId)=>{
    const conn = new DataConnection(CollectionNameCategories);
    try {
        var result = await conn.getOne(categoryId);
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.getCategories = async ()=>{
    const conn = new DataConnection(CollectionNameCategories);
    try {
        var result = await conn.getAll();
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.updateCategory = async (id,category)=>{
    const conn = new DataConnection(CollectionNameCategories);
    try {
        var result = await conn.updateOne(id,category)
        if (result.modifiedCount)
            return await this.getCategory(id);
        return [];
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.deleteCategory = async (id)=>{
    const conn = new DataConnection(CollectionNameCategories);
    try {
        var result = await conn.deleteOne(id)
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}