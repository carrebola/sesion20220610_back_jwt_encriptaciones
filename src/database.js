//database
// mongodb+srv://carrebola:<password>@cluster0.2onof.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose')

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.2onof.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
//guardamos conexión
const db = mongoose.connection

//exportamos conexión
module.exports = db
