const { verifyToken } = require('../helpers/generateToken')

const checkAuth = async (req, res, next) => {
    try{
        //TODO: authorization: Bearer 1010101010101010101010100
        const token = req.headers.authorization.split(' ').pop() //TODO: 123123123
        const tokenData = await verifyToken(token)
        console.log(tokenData)
        
        if(tokenData._id){
            next()
        }else{
            res.status(409)
            res.send({error: 'No tienes permisos!'})
        }

    }catch(e){
        console.log(e)
        res.status(409)
        res.send({ error: 'No tienes permisos'})
    }
}

module.exports = checkAuth