Proceso construcción API

1. crear proyecto
2. crear conexión con con git/github
3. instalar dependencias
4. crear un servidor con express
5. ruta principal ok
6. crear rutas generales
    - raiz
    - api/usuarios
    - api/mascotas
    - api/registro
    - api/login
7. Controlador para registro (post)
8. verificar el endpoint api/registro (POSTMAN)
9. creado middleware para parsear datos del body
10. Comprobar que se reciben los datos desde body

11.Creamos la base de datos en moongo
    12. Conectamos la base de datos utilizando el archivo database.js
    13. Crear un modelo de datos  
14. Actualizar el controlador registro para usando el modelo cree nuevos usuarios
15. Encriptar las contraseñas: bcrypt
16. Construimos controlador para login
    17. Usaremos bcrypt para desencriptar contraseñas y compararlas con las del usuario logeado
    18. Si el usuario existe le devolveremos un TOKEN que crearemos con la dependencia 'jsonwebtoken'
        token: 
            - info de codificación
            - payload (info que queremos encriptar)
            - palabra secreta para la encriptación (que solo conoce el servidor)
17. Crear endpoint mascotas para asegurarnos que solo pueden entrear los usuarios registrados.
18. Crear un middleware auth que comprueba que la petición se hace enviando el token y que el token corresponde a un usuario real
---
18. Crear endpoint de usuarios para limitar el acceso a usuarios con los roles admin y gestorUsuarios 
19. verificar con postman todos los endpoints

---
* crear endpoints para subir archivos al servidor usando 'multer'
* manipularemos archivos en el servidor usando 'js-extra'






