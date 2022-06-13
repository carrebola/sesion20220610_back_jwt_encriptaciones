const m_usuarios = require("../modelos/m_usuarios")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const c_login = async (req, res)=>{
    const user= req.body.user
    const pass= req.body.pass
    //conectamos con la base de datos para buscar usuario
    try {
        //obtenemos el usuario con el user enviado
        const usuarioEncontrado = await m_usuarios.findOne({"user":user})
        //si la contraseña es igual...
        console.log(user, pass)
        console.log(await bcrypt.compare(pass, usuarioEncontrado.pass))

        if(await bcrypt.compare(pass, usuarioEncontrado.pass)){
            //generar un token
            const token = await jwt.sign(
                {
                    data: {
                        userID: usuarioEncontrado._id,
                        roles: usuarioEncontrado.roles,
                        user: usuarioEncontrado.user
                    } //datos que queremos encriptar
                }, 
                process.env.SECRETO, //palabra secreta para hacer la encriptación
                { expiresIn: 60 * 60 } //1 hora antes de caducar
            );

            res.status(200).json({
                token,
                userID: usuarioEncontrado._id,
                user: usuarioEncontrado.user,
                mensaje: 'token ok'
            })

        }else{
            res.status(400).json({
                mensaje: 'la contraseña no es correcta'
            })
        }
        
    } catch (error) {
        res.status(400).json({
            error: error,
            mensaje: 'Usuario no encontrado o contraseña invalida'
        })
    }


    
}

module.exports = c_login