module.exports = function (injectedStore) {
  let store = injectedStore;

  function getProducts(json) {
    return store.getProducts(json);
  }

  function getProductsId(json) {
    const data = {
      id: json.id,
    };
    return store.getProductsId(data);
  }
  function postProducts(json) {
    const data = {
      name: json.name,
      price: json.price,
      description: json.description,
      img: json.img,
      category_id: json.category_id,
    };
    return store.postProducts(data);
  }
  function putProducts(json, params) {
    const data = {
      name: json.name,
      price: json.price,
      description: json.description,
      img: json.img,
      category_id: json.category_id,
      id: params.id,
    };
    console.log(data);
    return store.putProducts(data);
  }
  function deleteProducts(json) {
    const data = {
      id: json.id,
    };
    return store.deleteProducts(data);
  }

  return {
    getProducts,
    getProductsId,
    postProducts,
    putProducts,
    deleteProducts,
  };
};
