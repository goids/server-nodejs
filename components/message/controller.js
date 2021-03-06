const store = require('./store');
const { socket } = require('../../socket');

function addMessage(chat, user, msg, file){
    return new Promise((resolve, reject) => {
        if(!chat || !user || !msg){
            console.log('[message Controller]: no hay un usuario o un mensaje')
            reject('Los datos son incorrectos');
        }

        let urlFile = '';

        if(file){
            urlFile = `http://localhost:3005/app/files/${file.filename}`;
        }

        const fullMesage = {
            chat,
            user,
            message: msg,
            date: new Date(),
            file: urlFile,
        }
        // console.log(fullMesage);
        store.add(fullMesage);

        socket.io.emit('message', fullMesage);

        resolve(fullMesage);
    });
}

function getMessage(filterUser){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message){
    return new Promise( async(resolve, reject) => {
        if(!id || !message){
            reject("Invalid data");
            // return false;
        }

        const result = await store.update(id, message);
        resolve(result);
    })
}

function deleteMessage(id){
    return new Promise( (resolve, reject) => {
        if(!id)
            reject("ID invalido")
        
        store.remove(id)
            .then( () => resolve() )
            .catch( e => reject(e))
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
}