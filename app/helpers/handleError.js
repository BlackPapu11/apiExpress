const httpError = (res, err) => {
    console.log(res)
    res.status(500)
    res.send({error: 'Algo ocurrio'})
}

module.exports = { httpError }