const { query, body, param, check, validationResult } = require('express-validator')

const createValidator = [
    
]

const findValidator = [
    param('id').not().isEmpty(),
    check('id').isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    },
]
const updateValidator =[
    
]

module.exports = {
    createValidator,
    findValidator,
    updateValidator
}

