const jwt = require('jsonwebtoken')
const m_usuarios = require('../modelos/m_usuarios')

const auth = async (req, res, next)=>{
    //capturamos el token que envian en la cabecera
    const token = req.headers.authorization.split(' ')[1]
    
    //desencriptamos el token
    // invalid token
    const SECRETO = process.env.SECRETO
    try {
        const tokenVerificado = jwt.verify(token, SECRETO)

        //buscamos en base de datos el usario con el id
        const usuarioEncontrado = await m_usuarios.findById(tokenVerificado.data.userID)
        console.log(usuarioEncontrado)
        //Pasamos al siguiente middleware (en este caso el controlador c_mascotas)
        next()

    } catch (error) {
        res.status(500).json({
            error: error,
            mensaje: 'El token no es valido'
        })
    } 
}

module.exports = auth