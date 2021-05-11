//const client = require('../db/connection');
const DataConnection = require('../db/db')

exports.insertCategory = async (category)=>{
    const conn = new DataConnection('categories');
    try {
        var result = await conn.insertOne(category);
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.getCategory = async (categoryId)=>{
    const conn = new DataConnection('categories');
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
    const conn = new DataConnection('categories');
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
    const conn = new DataConnection('categories');
    try {
        var result = await conn.updateOne(id,category)
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.deleteCategory = async (id)=>{
    const conn = new DataConnection('categories');
    try {
        var result = await conn.deleteOne(id)
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}