// import mongoose
const mongoose= require('mongoose');
// schema
const schema= mongoose.Schema

const contactSchema= new schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number,
    },
    dateCreation: {
        type: Date,
        defaut: Date.now()
    }
});

module.exports= Contact= mongoose.model('contacts',contactSchema )
