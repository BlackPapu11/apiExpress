const { encrypt, compare } = require("../helpers/handleBCrypt")
const {httpError} = require('../helpers/handleError')
const userModel = require('../models/users')
const { tokenSign } = require('../helpers/generateToken')

const loginCtrl = async (req, res) =>{
    try{
        const { email, password } = req.body
        
        const user = await userModel.findOne({email})
        console.log('USEEEERRR**********',user)
        if(!user){
           res.status(404)
           res.send({error: "User not found"}) 
        }

        const checkPassword = await compare(password, user.password)
        console.log('checkPassword',checkPassword)
        const tokenSession = await tokenSign(user)
        //console.log(tokenSession)
        if(checkPassword){
            res.send({data: user, tokenSession})
        }

        if(!checkPassword){
            res.status(409)
            res.send({ error: "Invalid password" })
            return
        }
    }catch(e){
        httpError(res, e)
    }
}

//TODO: Registramos usuario!
const registerCtrl = async (req, res) => {
    try{
        const { email, password, name, role } = req.body
        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            name,
            password: passwordHash,
            email,
            role
        })

        res.send({data: registerUser})
    }catch(e){
        httpError(res, e)
    }
}

module.exports = { loginCtrl, registerCtrl }