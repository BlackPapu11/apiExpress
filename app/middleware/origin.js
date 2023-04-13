const checkOrigin = (req, res, next) => {
    //TODO: Origin 
    const token = req.headers.authorization.split(' ').pop()
    if(token === '123456'){
        next()
    }else{
        res.status(409)
        res.send({ error: 'No tienes autorización realizar esta acción'})
    }

}

module.exports = checkOrigin