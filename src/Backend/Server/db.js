const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connect = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected');
    })
}

module.exports = connect;