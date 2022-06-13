//r_mascotas
//dependencias node
const express = require('express')

//cargamos controlador
const c_usuarios = require('../controladores/c_usuarios')
const auth = require('../middleware/auth')
const rol = require('../middleware/rol')

//Enrutador
const r_usuarios = express.Router()

//ruta principal solo para usuarios autenticados
// y ademas tienen que tener el rol de admin o gestorUsuarios
r_usuarios.get('/', auth, rol(['admin','gestorUsuarios']), c_usuarios)

//exportar 
module.exports = r_usuarios