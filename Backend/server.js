import connectToDatabase from "./db.js";
import express from "express";

connectToDatabase();

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server is Online at Port: ${PORT}`);
})