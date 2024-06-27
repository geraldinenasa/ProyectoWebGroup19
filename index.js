const express = require('express');
const app = express();
const port = 3000;
const dataBase = require('./src/dataBase/dataConfig');

app.use(express.static(__dirname + '/public'));

app.listen(port, (error) => {
    if (error) {
        console.log('Hay un error en la conexion')
    } else {
        console.log('Server corriendo en el puerto ', port)
    }
})
