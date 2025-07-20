import connectToDatabase from "./db.js";
import express from "express";
import auth from './Routes/auth.js';
import cors from 'cors';

connectToDatabase();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', auth);


app.listen(PORT, () => {
    console.log(`Server is Online at Port: ${PORT}`);
})