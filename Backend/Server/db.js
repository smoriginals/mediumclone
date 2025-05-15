const mongoose = require('mongoose');

const URI = 'mongodb+srv://surajmauryahomework:Fpq6PBWuvSq9Ngbv@mediumclone.kbkuuz5.mongodb.net/';

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('DB Connected...');
    } catch (error) {
        console.error('DB Connection Failed...', error);
    }
};

module.exports = connectDB;
