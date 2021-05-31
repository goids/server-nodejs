const store = require('./store');

function addMessage(user, msg){
    return new Promise((resolve, reject) => {
        if(!user || !msg){
            console.log('[message Controller]: no hay un usuario o un mensaje')
            reject('Los datos son incorrectos');
        }
        const fullMesage = {
            user,
            message: msg,
            date: new Date()
        }
        // console.log(fullMesage);
        store.add(fullMesage);
        resolve(fullMesage);
    });
}

function getMessage(){
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessage
}