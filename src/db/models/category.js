const Validator = require('jsonschema').Validator;
const schema = require('./categorySchema.json');

exports.validCategory = (category)=>{
    var v = new Validator();
    const res = v.validate(category, schema);
    return res;
};
