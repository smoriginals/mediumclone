import mongoose from 'mongoose';
//this data is use for creating a user in the database.
const schema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default:Date.now,
    }
});

export default mongoose.model('createUser', schema);