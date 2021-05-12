const DataConnection = require('../db/db');
const CollectionNameProducts = "products";

exports.insertProduct = async (product)=>{
    const conn = new DataConnection(CollectionNameProducts);
    try {
        var result = await conn.insertOne(product);
        if (result.insertedId)
            return await this.getProduct(result.insertedId);
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.getProduct = async (productId)=>{
    const conn = new DataConnection(CollectionNameProducts);
    try {
        var result = await conn.getOne(productId);
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.getProducts = async ()=>{
    const conn = new DataConnection(CollectionNameProducts);
    try {
        var result = await conn.getAll();
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.getProductsByCategory = async (categoryId)=>{
    const conn = new DataConnection(CollectionNameProducts);
    try {
        const query = { 'categoryId':categoryId };
        var result = await conn.getByQuery(query);
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.updateProduct = async (id,product)=>{
    const conn = new DataConnection(CollectionNameProducts);
    try {
        var result = await conn.updateOne(id,product)
        if (result.modifiedCount>0)
            return await this.getProduct(id);
        return [];
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}

exports.deleteProduct = async (id)=>{
    const conn = new DataConnection(CollectionNameProducts);
    try {
        var result = await conn.deleteOne(id)
        return result;
    } catch (error) {
       console.log(error);
    }finally{
        await conn.close();
    }
}