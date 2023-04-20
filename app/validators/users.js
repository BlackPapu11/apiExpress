const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')
const userModel = require('../models/users')

const validateCreate = [ 
    check('name')
    .exists()
    .not()
    .isEmpty(),
    check('lastname')
    .exists()
    .not()
    .isEmpty(),
    check('surname')
    .exists()
    .not()
    .isEmpty(),
    check('phone')
    .exists()
    .isNumeric(),
    check('ext_phone')
    .exists()
    .not()
    .isEmpty(),
    check('name_photo')
    .exists()
    .not()
    .isEmpty(),
    check('password')
    .exists()
    .not()
    .isEmpty(),
    check('email')
    .exists()
    .isEmail()
    .custom(async (value, { req })=>{
        console.log(value)
        const user = await userModel.findOne({email:value})
        console.log(user)
        if(user){
            throw new Error('El correo ya ha sido registrado!')
        }
        return true
    }),
    check('role')
    .exists()
    .not()
    .isEmpty(),
    ( req, res, next ) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }