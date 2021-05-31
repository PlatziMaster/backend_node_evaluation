//importamos model
const Category = require('../models/Category');
const Product = require('../models/Product');
//LISTA DE CATEGORIAS -> GET
module.exports.show = (req,res)=>{
    Category.find({},(error,categories)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al obtener categorias'
            });
        }
        //Ok
        console.log('ok');
        console.log(categories);
        return res.status(200).json({
            categories
        });
    });
}
//RETORNAR CATEGORIA -> GET
module.exports.search = (req,res)=>{
    const id = req.params.id ;
    console.log('search',id);

    Category.findById(id,(error, category) =>{
        if(error){
            return res.status(404).json({
                message: 'Categoria no encontrada'
            })
        }
        //res.redirect('/')
        //ok
        return res.status(200).json({
            category
        });
    });
};

//CREAR CATEGORIA -> POST
module.exports.create = (req,res)=>{
    console.log('create--');
    console.log(req.body);

    const category = new Category({
        name: req.body.name,
        image: req.body.image
    })
    category.save((error,category) => {
        if(error){
            return res.status(500).json({
                message: 'Error al crear la categoria'
            })
        }
        //res.redirect('/')
        //ok
        return res.status(200).json({
            message: 'Categoria creada con exito'
        });
    })
};

//MODIFICAR CATEGORIA -> PUT
module.exports.update = (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const image = req.body.image;

    console.log('update');
    console.log(id);
    console.log(name);
    console.log(image);

    //encontrar categoria
    Category.findByIdAndUpdate(id,{
        name,
        image
    },(error,category) => {
        if(error){
            return res.status(500).json({
                message: 'Error al modificar categoria'
            })
        }
        //ok
        return res.status(200).json({
            message: 'Categoria modificada con exito'
        });
    });
};

//ELIMINAR CATEGORIA -> DELETE
module.exports.delete = (req,res)=>{
    const id = req.params.id;
    Category.findByIdAndDelete(id,(error, category) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar categoria'
            })
        }
        //ok
        return res.status(200).json({
            message: 'Categoria eliminada con exito'
        });
    });
};

//PRODUCTO DE CATEGORIA -> GET
module.exports.products = (req,res)=>{
    const id = req.params.id;
    Product.find().where('categoryId','==',id).exec((error,productos)=>{
        if(error){
            return res.status(404).json({
                message: 'Productos no encontrados'
            })
        }
        console.log('resultados');
        console.log(productos);
        return res.status(200).json({
            productos
        });
        
    });
};