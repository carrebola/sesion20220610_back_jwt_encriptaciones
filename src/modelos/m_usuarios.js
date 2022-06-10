
const mongoose = require('mongoose')

//definimos el esquema
var Schema = mongoose.Schema

//Instancia del esquema
var EsquemaUsuario = new Schema({
    user: String,
    pass: String,
    roles: [String]
})

//creamos el modelo
const m_usuarios = mongoose.model('users' , EsquemaUsuario)

module.exports = m_usuarios