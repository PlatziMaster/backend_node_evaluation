const Validator = require('jsonschema').Validator;
const schema = require('./productSchema.json');

exports.validProduct = (product)=>{
    var v = new Validator();
    const res = v.validate(product, schema);
    return res;
};
