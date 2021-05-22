module.exports = function (injectedStore) {
  let store = injectedStore;

  function getCategories() {
    return store.getCategories();
  }
  function getCategoriesId(json) {
    const data = {
      id: json.id,
    };
    return store.getCategoriesId(data);
  }
  function postCategories(json) {
    const data = {
      name: json.name,
      img: json.img
    };
    return store.postCategories(data);
  }
  function putCategories(json,id) {
    console.log(json, id);
    const data = {
      name: json.name,
      img: json.img,
      id: id.id,
    };
    console.log(data);
    return store.putCategories(data);
  }
  function deleteCategories(json) {
    const data = {
      id: json.id,
    };
    return store.deleteCategories(data);
  }
  function getCategoriesIdProducts(json) {
    const data = {
      id: json.id,
    };
    return store.getCategoriesIdProducts(data);
  }

  return {
    getCategories,
    getCategoriesId,
    postCategories,
    putCategories,
    deleteCategories,
    getCategoriesIdProducts,
  };
};
