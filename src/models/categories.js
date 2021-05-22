const conn = require('./connection.js');

function getCategories() {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM categoris`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function getCategoriesId(json) {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM categoris WHERE id = ${json.id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function postCategories(json) {
  return new Promise((resolve, reject) => {
    conn.query(`INSERT INTO platzi.categoris
    (name, img)
    VALUES('${json.name}', '${json.img}');
    `, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function putCategories(json) {
  return new Promise((resolve, reject) => {
    conn.query(`UPDATE platzi.categoris
    SET name='${json.name}', img='${json.img}'
    WHERE id=${json.id};
    `, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function deleteCategories(json) {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM platzi.categoris
    WHERE id=${json.id};`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function getCategoriesIdProducts(json) {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM products WHERE categorys_id = ${json.id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = {
    getCategories,
    getCategoriesId,
    postCategories,
    putCategories,
    deleteCategories,
    getCategoriesIdProducts,
};
