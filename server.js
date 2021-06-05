const express = require('express');
const bodyParse = require('body-parser');
const socket = require('./socket');

let app = express();
const server = require('http').Server(app);

const db = require('./db');

// Router funcional con un solo componente
// const router = require('./components/message/network');
// Router funcional con varios componentes
const router = require('./network/routes');

//const router = express.Router();
db('mongodb+srv://db_user_goide:goide2021@cluster0.tryim.mongodb.net/goide_db?retryWrites=true&w=majority');

app.use(bodyParse.json())
// Usadno el middleware de Express
// app.use(router);

socket.connect(server)

// Enviar el servidor para que se generen todas las rutas
router(app);

//archivos estaticos
app.use('/app', express.static('public'))

// app.listen(3005);
server.listen(3005, function(){
    console.log('Listen API on port 3005, http://localhost:3005');
});