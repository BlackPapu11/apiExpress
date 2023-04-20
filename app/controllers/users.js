const {httpError} = require('../helpers/handleError')
const userModel = require('../models/users')
const { encrypt } = require("../helpers/handleBCrypt")

const getItems = async ( req, res ) =>{
    try{
        const listAll = await userModel.find({})
        res.send({ data: listAll})
    }catch(e){
        httpError(res, e)
    }
}

const getItem = ( req, res ) =>{
    
}

const createItem = async ( req, res ) =>{
    try{
        const { name,lastname,surname,phone,ext_phone,name_photo, password, email, role } = req.body
        const passwordHash = await encrypt(password)
        const resDetail = await userModel.create({
            name, lastname, surname, phone, ext_phone, name_photo, password:passwordHash, email, role
        })
        res.send({ data: resDetail})
    }catch(e){
        httpError(res, e)
    }
}

const updateItem = ( req, res ) =>{
    
}

const deleteItem = ( req, res ) =>{
    
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }