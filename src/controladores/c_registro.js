const m_usuarios = require('../modelos/m_usuarios')
const bcrypt = require('bcrypt')

const c_registro = async (req, res)=>{
    //Encriptamos la contraseña
    const contraseñaEncriptada = await bcrypt.hash(req.body.pass, 10)

    //instancia del modelo
    usuario = new m_usuarios({
        user : req.body.user,
        pass : contraseñaEncriptada,
        roles : ['registrado']
    })
    try {
        const usuarioGuardado = await usuario.save()
        res.status(200).json({
            usuario: usuarioGuardado,
            mensaje: 'Estas en el controlador de c_registro'
        })
    } catch (err) {
        res.status(400).json({
            error: err,
            mensaje: 'Error al registrar el usuario'
        })
    } 
    
}

module.exports = c_registro