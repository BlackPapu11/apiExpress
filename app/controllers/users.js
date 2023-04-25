const {httpError} = require('../helpers/handleError')
const userModel = require('../models/users')
const { encrypt, compare } = require("../helpers/handleBCrypt")

const getItems = async ( req, res ) =>{
    try{
        const listAll = await userModel.find({})
        res.send({ data: listAll})
    }catch(e){
        httpError(res, e)
    }
}

const getItem = async( req, res ) =>{
    const id = req.params.id
    try{
        const user = await userModel.findOne({ _id: id })
        console.log(user)
        if(user)
            res.send( { data: user })
        else
            res.json( {mensaje: 'No se se encontraron resultados'})
    }catch(e){
        httpError(res,e)
    }
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

const updateItem = async ( req, res ) =>{
    const id = req.params.id;
    const  body = req.body

    console.log(id)
    console.log('body', body)

    try{
        const oldUserInfo = await userModel.findOne({ _id: id })
        const { name, lastname, surname, phone, ext_phone, name_photo, email, role } = req.body
        
        const newUserInfo = {
            name:name,
            lastname:lastname,
            surname:surname,
            phone:phone,
            ext_phone: ext_phone,
            name_photo: name_photo,
            // password: oldUserInfo.password,
            email: email,
            role: role
        }
        // const checkPassword = await compare(password, oldUserInfo.password)
        // if(!checkPassword){
        //     console.log("Entra")
        //     newUserInfo.password = await encrypt(newUserInfo.password)
        // }

        const user = await userModel.findByIdAndUpdate(id,newUserInfo,{ useFindAndModify: false })
        res.send({ data: newUserInfo })
    }catch(e){
        httpError(res, e)
    }
}

const deleteItem = async ( req, res ) =>{
    const id = req.params.id;
    console.log('id',id)
    try{
        const user = await userModel.findByIdAndDelete({ _id:id })
        console.log(user)
         if(!user){
            res.json({ estado: false, mensaje:'No se puede eliminar' })
         }else{
            res.json({ estado: true, mensaje: 'eliminado!'})
         }
    }catch(e){
        httpError(res,e)
    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }