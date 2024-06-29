const { listarTodo, registroMascota, agregarMascota, logIn } = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const upload = require('../utils/handleStorage');

router.get('/nuestrosPerros', listarTodo);

router.get('/formRegistroMascota', registroMascota);

router.post('/registroEnviado', upload.single('imagen'), agregarMascota);

router.get('/logIn', logIn );

module.exports = router;
