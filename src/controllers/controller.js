const pool = require('../dataBase/dataConfig');
const url_imagen = `http://localhost:3000/img/`;

/**Obtiene todos los perros de la base de datos */
const listarTodo = async(req, res) => {
    const sql = `SELECT * FROM perros`;
    pool.query(sql, (error, perros) => {
        if(error) {
            console.log(`Error en la consulta SQL: `, error)
            return res.status(500).send(`Error al obtener los datos`)
        } else {
            // res.status(200).json(results)
            res.render('pages/nuestrosPerros',{perros})
        }
    })
};

/**Ruta de formulario para registrar mascota */
const registroMascota = (req, res) => {
    res.render('pages/registroPerros');
};


const agregarMascota = async(req, res) => {
    if(!req.file) {
        console.log("No se ha cargado ninguna imagen")
    }
    const image = url_imagen + req.file.filename;
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
        // res.render('pages/registroEnviado');
        res.status(201).json({msg:'Recurso creado'})
    });
}
  
const logIn = (req, res) => {
    res.render('pages/logIn')
};

const registroUsuario =(req, res) => {
    res.render('pages/registroUsuario')
};

const agregarUsuario = (req, res) => {
    // if(!req.file) {
    //     console.log("No se ha cargado ninguna imagem")
    // }
    const image = url_imagen + req.file.filename;
    const {nombre, direccion, telefono, email, fecha_adopcion, imagen, perro_id} = req.body;
    if(nombre === "" || direccion === "" || telefono === "" || email === "" || fecha_adopcion === "" || imagen === "") {
        return res.status(400).send('Todos los campos requeridos deben ser completados');
    }
    const sql = 'INSERT INTO adoptantes (nombre, direccion, telefono, email, fecha_adopcion, imagen, perro_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [nombre, direccion, telefono, email, fecha_adopcion, image, perro_id]
    pool.query(sql, values, (err, result) => {
        if(err) {
            console.error('Error en la consulta SQL: ', err);
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(201).json({msg:'Usuario creado'})
        console.log(result)
    })
};

const obtenerAdoptantes = (req, res) =>{
    const sql = `SELECT * FROM adoptantes`;
    pool.query(sql, (error, results) => {
        if(error) {
            console.log(`Error en la consulta SQL: `, error)
            return res.status(500).send(`Error al obtener los datos`)
        } else {
            res.status(200).json(results)
        }
    })
}


const actualizarAdoptante = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, email, fecha_adopcion } = req.body;

    if (!nombre || !direccion || !telefono || !email || !fecha_adopcion) {
        return res.status(400).send('Todos los campos requeridos deben ser completados');
    }

    try {
        const sql =  'UPDATE adoptantes SET nombre = ?, direccion = ?, telefono = ?, email = ?, fecha_adopcion = ? WHERE id_adoptantes= ?';
        const values = [nombre, direccion, telefono, email, fecha_adopcion, id];
        await pool.query(sql, values);
        res.status(200).send('Adoptante actualizado exitosamente');
    } catch (error) {
        console.error('Error al actualizar adoptante:', error);
        res.status(500).send('Error al actualizar adoptante');
    }
};


const eliminarAdoptante = async (req, res) => {
    const { id } = req.params;

    try {
        const sql = 'DELETE FROM adoptantes WHERE id_adoptantes = ?';
        await pool.query(sql, [id]);
        res.status(200).send('Adoptante eliminado exitosamente');
    } catch (error) {
        console.error('Error al eliminar adoptante:', error);
        res.status(500).send('Error al eliminar adoptante');
    }
};

module.exports = {
    listarTodo,
    registroMascota,
    agregarMascota,
    logIn,
    registroUsuario,
    agregarUsuario,
    obtenerAdoptantes,
    actualizarAdoptante,
    eliminarAdoptante
}