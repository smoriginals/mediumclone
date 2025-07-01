import mongoose from 'mongoose';

const connectionURI = 'mongodb+srv://surajmauryahomework:kfn83uQQzVGYIRkE@mediumclonecluster.fvkfz8p.mongodb.net/';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('error:', error.message);
        // Remove process.exit(1) to avoid 'process' is not defined error in ESM/browser context
        throw error; // Rethrow error for handling upstream
    }
}

export default connectToDatabase;