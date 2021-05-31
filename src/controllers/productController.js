//importamos model
const Product = require('../models/Product');

//LISTA DE PRODUCTOS -> GET
module.exports.show = (req,res)=>{
    Product.find({},(error,products)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al obtener productos'
            });
        }
        //Ok
        console.log('ok');
        console.log(products);
        return res.status(200).json({
            products
        });
    });
}

//RETORNAR PRODUCTO -> GET
module.exports.search = (req,res)=>{
    const id = req.params.id ;
    console.log('search',id);

    Product.findById(id,(error, product) =>{
        if(error){
            return res.status(404).json({
                message: 'Producto no encontrado'
            })
        }
    
        return res.status(200).json({
            product
        });
    });
};

//CREAR PRODUCTO -> POST
module.exports.create = (req,res)=>{
    console.log('create--');
    console.log(req.body);

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId,
        image: req.body.image
    })
    product.save((error,product) => {
        if(error){
            return res.status(500).json({
                message: 'Error al crear el producto'
            })
        }
        
        return res.status(200).json({
            message: 'Producto creado con exito'
        });
    })
};

//MODIFICAR PRODUCTO -> PUT
module.exports.update = (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const categoryId = req.body.categoryId;
    const image = req.body.image;

    console.log('update');
    console.log(id);
    console.log(name);
    console.log(categoryId);

    Product.findByIdAndUpdate(id,{
        name,
        price,
        description,
        categoryId,
        image
    },(error,category) => {
        if(error){
            return res.status(500).json({
                message: 'Error al modificar producto'
            })
        }
        //ok
        return res.status(200).json({
            message: 'Producto modificado con exito'
        });
    });
};

//ELIMINAR PRODUCTO -> DELETE
module.exports.delete = (req,res)=>{
    const id = req.params.id;
    Product.findByIdAndDelete(id,(error, product) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar producto'
            })
        }
        //ok
        return res.status(200).json({
            message: 'Producto eliminado con exito'
        });
    });
};