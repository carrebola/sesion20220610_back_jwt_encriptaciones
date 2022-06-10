//r_registro
//dependencias node
const express = require('express')

//cargamos controlador
const c_registro = require('../controladores/c_registro')

//Enrutador
const r_registro = express.Router()

//ruta principal
r_registro.post('/', c_registro)

//exportar 
module.exports = r_registro