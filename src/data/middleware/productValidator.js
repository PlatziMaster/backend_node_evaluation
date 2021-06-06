const { query, body, param, check, validationResult } = require('express-validator')

const createValidator = [
    body('name').not().isEmpty(),
    body('price').not().isEmpty(),
    body('description').not().isEmpty(),
    body('categoryId').not().isEmpty(),
    body('image').not().isEmpty(),
    
    body('name').isString(),
    body('price').isNumeric(),
    body('description').isString(),
    body('categoryId').isString(),
    body('image').isString(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    },
]

const findValidator = [
    param('id').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    },
]
const updateValidator =[
    param('id').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    },
]

const categoryValidator = [
    param('id').not().isEmpty(),
    (req, res, next) => {
        console.log(req.params)
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    },
]

module.exports = {
    createValidator,
    findValidator,
    updateValidator,
    categoryValidator
}

