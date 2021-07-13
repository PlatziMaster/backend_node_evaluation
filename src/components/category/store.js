const Model = require('../../models/category');

function addCategory(category){
  const newCategory = new Model(category);
}

function getCategories(){
  return new Promise((resolve, reject)=>{
    const categories = Model.find();
    resolve(categories);
  });
}

function oneCategory(filterCategory){
  return new Promise((resolve, reject)=>{
    let filter = {};
    if(filterCategory !== null){
      filter = {
        name: filterCategory
      };
    }
    const category = Model.find(filter);
    resolve(category);
  });
}

function updateCategory(id, name){
  return new Promise((resolve, reject)=>{
    const foundCategory = Model.findById({
      _id: id
    });
    foundCategory.name = name;
    const newName = foundCategory.save();
    resolve(newName);
  });
}

function removeCategory(id){
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addCategory,
  list: getCategories, 
  one: oneCategory,
  update: updateCategory, 
  remove: removeCategory
};