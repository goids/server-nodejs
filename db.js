const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function connect(url){
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Conectado en la base de datos...');
}

module.exports = connect;


