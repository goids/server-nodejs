const Model = require('./model');

function getMessages(userId){
    return new Promise( (resolve, reject) => {
        let filter = {}
    
        if(userId !== null){
            filter = { users: userId}
        }
    
        Model.find(filter)
            .populate('users')
            .exec( (error, populated) => {
                if(error){
                    reject(error);
                }
                resolve(populated);
            });
    })
}

function addMessage(chat){
    const myMessage = new Model(chat);
    return myMessage.save();
}

module.exports = {
    add: addMessage,
    list: getMessages,
}