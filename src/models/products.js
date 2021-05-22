const conn = require('./connection.js');

function getProducts(json) {
    console.log(json);
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM products`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function getProductsId(json) {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM products WHERE id = ${json.id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function postProducts(json) {
  return new Promise((resolve, reject) => {
    conn.query(
      `INSERT INTO platzi.products
        (name, price, description, img, categorys_id)
        VALUES('${json.name}', '${json.price}', '${json.description}', '${json.img}', ${json.category_id});
        `,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
}
function putProducts(json) {
  return new Promise((resolve, reject) => {
    conn.query(
      `UPDATE platzi.products
        SET name='${json.name}', price='${json.price}', description='${json.description}', img='${json.img}', categorys_id=${json.category_id}
        WHERE id=${json.id};
        `,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
}
function deleteProducts(json) {
  return new Promise((resolve, reject) => {
    conn.query(
      `DELETE FROM platzi.products
          WHERE id=${json.id};`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
}

module.exports = {
  getProducts,
  getProductsId,
  postProducts,
  putProducts,
  deleteProducts,
};
