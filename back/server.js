require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoDB');
const add = require('./route/addRoute');
const get = require('./route/getRoute');
const del = require('./route/deleteRoute');
const update = require('./route/updateRoute');
const getSingle= require('./route/getSingleRoute');
const auth = require('./route/authRoute');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


connectDB();

app.use('/api/v1/',add);
app.use('/api/v1/',get);
app.use('/api/v1/',del);
app.use('/api/v1/',update);
app.use('/api/v1/',getSingle);
app.use('/api/v1',auth);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});