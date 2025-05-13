require('dotenv').config({ path: '../env.local' });

const connection = require('./db');
const express = require('express');

connection();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Connected');
})

app.listen(port, () => {
    console.log(`Server Online at Port: ${port}`);
});