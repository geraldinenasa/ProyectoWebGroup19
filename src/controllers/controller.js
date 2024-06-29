const pool = require('../dataBase/dataConfig');
const url_imagen = `http://localhost:3000/`;

/**Obtiene todos los perros de la base de datos */
const listarTodo = async(req, res) => {
    const sql = `SELECT * FROM perros`;
    pool.query(sql, (error, results) => {
        if(error) {
            console.log(`Error en la consulta SQL: `, error)
            return res.status(500).send(`Error al obtener los datos`)
        } else {
            res.json(results)
        }
    })
};

/**Ruta de formulario para registrar mascota */
const registroMascota = (req, res) => {
    res.render('pages/formRegistroMascota');
};


const agregarMascota = async(req, res) => {
    if(!req.file) {
        console.log("No se ha cargado ninguna imagem")
    }
    const image = url_imagen + req.file.filename;
    console.log(image)
    const { nombre, raza, sexo, edad, peso, tamanio, fecha_ingreso, adoptado, imagen } = req.body;
    if (nombre === "" || raza ==="" || sexo === "" || edad === "" || peso === "" || tamanio === "" || fecha_ingreso === "" || adoptado === "" || imagen === "") {
        return res.status(400).send('Todos los campos requeridos deben ser completados');
    }
    const sql = 'INSERT INTO perros (nombre, raza, sexo, edad, peso, tamanio, fecha_ingreso, adoptado, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [nombre, raza, sexo, edad, peso, tamanio, fecha_ingreso || null, adoptado ? 1 : 0, image];
    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error en la consulta SQL:', err);
            return res.status(500).send('Error al registrar el perro');
        }
        res.render('pages/registroEnviado');
    });
}
  
const logIn = (req, res) => {
    res.render('pages/logIn')
}

module.exports = {
    listarTodo,
    registroMascota,
    agregarMascota,
    logIn
}