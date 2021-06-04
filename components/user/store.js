const Model = require('./model');

function addUser(user){
    const newUser = new Model(user);
    return newUser.save();
}

async function getUser(){
    const usuarios = await Model.find();
    return usuarios;
}

module.exports = {
    add: addUser,
    get: getUser,
}