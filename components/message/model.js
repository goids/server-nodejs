const mongoose = require('mongoose');

// Sacar de Moongose la clase Schema
const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});

const model = mongoose.model('messages', mySchema);

module.exports = model;