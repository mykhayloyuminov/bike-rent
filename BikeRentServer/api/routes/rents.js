const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Bike = require('../models/bike');

router.get('/', (req, res, next) => {
    Bike.find({ rent: { $ne: null } })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;