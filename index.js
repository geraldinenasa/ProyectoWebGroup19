const express = require('express');
const app = express();
const router = require('./src/routes/router');
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// set motor de plantillas
app.set('view engine', 'ejs')
app.set('views', (__dirname + '/src/views'))

app.use('', router);

// Server corriendo 
app.listen(port, (error) => {
    if (error) {
        console.log('Hay un error en la conexion')
    } else {
        console.log('Server corriendo en el puerto ', port)
    }
})
