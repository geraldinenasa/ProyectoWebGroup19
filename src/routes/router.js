const { listarTodo, registroMascota, agregarMascota, logIn, registroUsuario, agregarUsuario, actualizarAdoptante, obtenerAdoptantes, eliminarAdoptante } = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const upload = require('../utils/handleStorage');

router.get('/nuestrosPerros', listarTodo);

router.get('/formularioPerros', registroMascota);

router.post('/registroEnviado', upload.single('imagen'), agregarMascota);

router.get('/logIn', logIn );

router.get('/registroUsuario', registroUsuario);

router.post('/agregarUsuario', upload.single('imagen'), agregarUsuario);

router.get('/adoptantes', obtenerAdoptantes)

router.put('/adoptante/:id', actualizarAdoptante);

router.delete('/adoptante/:id', eliminarAdoptante)

module.exports = router;
