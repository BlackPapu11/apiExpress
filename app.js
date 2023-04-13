require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
const { dbConnect } = require('./config/mongo')

app.use('/api/1.0', require('./app/routes'))

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto', PORT)
})