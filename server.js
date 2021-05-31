const express = require('express');
const bodyParse = require('body-parser');

// Router funcional con un solo componente
// const router = require('./components/message/network');
// Router funcional con varios componentes
const router = require('./network/routes');

//const router = express.Router();

let app = express();

app.use(bodyParse.json())
// Usadno el middleware de Express
// app.use(router);
// Enviar el servidor para que se generen todas las rutas
router(app);

//archivos estaticos
app.use('/app', express.static('public'))



app.listen(3005);