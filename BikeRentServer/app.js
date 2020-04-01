const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const bikeRoutes = require('./api/routes/bikes');
const rentRoutes = require('./api/routes/rents');

mongoose.connect('mongodb://127.0.0.1/bikerentDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/bikes', bikeRoutes);
app.use('/rents', rentRoutes);

module.exports = app;