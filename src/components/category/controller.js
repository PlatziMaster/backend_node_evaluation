const store = require('./store');

function addCategory(name){
  return new Promise((reject, resolve)=>{
    if(!name){
      console.error('[Category controller]:' + 'There is not name for a new category');
      reject('Wrong data');
      return false;
    }

    const category = {
      name: name
    }
    store.add(category);
    resolve(category);
  });

}

function getCategories(){
  return new Promise((resolve, reject)=>{
    resolve(store.list());
  });
}

function getCategory(filterCategory){
  return new Promise((resolve, reject)=>{
    resolve(store.one(filterCategory));
  });
}

function updateCategory(id, name){
  return new Promise((resolve, reject)=>{
    if(!id){
      reject('Invalid data');
      return false;
    }
    resolve(store.update(id, name));
  });
}

function deleteCategory(id){
  return new Promise((resolve, reject)=>{
    if(!id){
      reject('Wrong data, invalid id');
      return false;
    }
    store.remove(id)
      .then(()=>{
        resolve();
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};