//index

//librerias de node
const express = require('express')
const dotenv = require('dotenv')
//
const r_registro = require('./rutas/r_registro')
const r_login = require('./rutas/r_login')
const r_mascotas = require('./rutas/r_mascotas')
const db = require('./database')
const app=express()
//para usar variables de entorno
dotenv.config()

console.log(process.env.PORT)

//middleware para parseo de datos en body
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//rutas genericas
// app.use('/api/usuarios', r_usuarios)
app.use('/api/mascotas', r_mascotas)
app.use('/api/registro', r_registro)
app.use('/api/login', r_login)





//ruta principal de la API
app.get('/', (req, res)=>{
    res.send('<h1>API MASCOTAS</h1>')
})

//conectamos base de datos
db.on('error', (err)=>{
    console.log('Error en la conexión de la base de datos', err);
})

db.on('connected', ()=>{
    console.log('Base de datos conectada correctamente !!!');
})

//Levantamos el servidor
const PORT= process.env.PORT || 1000
app.listen(PORT, ()=>{
    console.log('Servidor escuchando en puerto ', PORT);
})