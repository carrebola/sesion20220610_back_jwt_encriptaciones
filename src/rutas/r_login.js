//r_login
//dependencias node
const express = require('express')

//cargamos controlador
const c_login = require('../controladores/c_login')

//Enrutador
const r_login = express.Router()

//ruta principal
r_login.post('/', c_login)

//exportar 
module.exports = r_login