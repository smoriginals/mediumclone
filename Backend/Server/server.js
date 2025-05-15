const connectionDB = require('./db');
const express = require('express');

await connectionDB();

const app = express();
const port =  5000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Connected');
})

app.listen(port, () => {
    console.log(`Server Online at Port: ${port}`);
});