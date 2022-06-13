//database
// mongodb+srv://carrebola:<password>@cluster0.2onof.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


// const DB_NAME = process.env.DB_NAME || 'sesion20220610'
// const DB_USER = process.env.DB_USER || 'carrebola'
// const DB_PASS = process.env.DB_PASS || 'carrebola'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2onof.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
//guardamos conexión
const db = mongoose.connection

//exportamos conexión
module.exports = db
