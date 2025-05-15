const express = require('express');
const connectDB = require('./db'); // correct file path

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Connected');
});

app.listen(port, () => {
    console.log(`Server Online at Port: ${port}`);
});
