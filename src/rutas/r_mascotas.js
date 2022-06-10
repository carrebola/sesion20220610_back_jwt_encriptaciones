//r_mascotas
//dependencias node
const express = require('express')

//cargamos controlador
const c_mascotas = require('../controladores/c_mascotas')
const auth = require('../middleware/auth')

//Enrutador
const r_mascotas = express.Router()

//ruta principal solo para usuarios autenticados
r_mascotas.get('/', auth,  c_mascotas)

//exportar 
module.exports = r_mascotas