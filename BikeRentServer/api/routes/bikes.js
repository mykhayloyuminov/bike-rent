const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Bike = require('../models/bike');

router.get('/', (req, res, next) => {
    Bike.find()
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/', (req, res, next) => {
    const bike = new Bike({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rent: null
    });
    bike.save()
        .then(result => res.status(201).json({ result }))
        .catch(err => res.status(500).json({ error: err }));
});

router.delete('/:bikeId', (req, res, next) => {
    const id = req.params.bikeId;
    Bike.deleteOne({ _id: id })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));

});

router.post('/:bikeId/rents', (req, res, next) => {
    const id = req.params.bikeId;
    Bike.updateOne({ _id: id }, { $set: { rent: { creationTime: Date.now() } } })
        .exec()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

router.delete('/:bikeId/rents', (req, res, next) => {
    const id = req.params.bikeId;
    Bike.updateOne({ _id: id }, { $set: { rent: null } })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));

});

module.exports = router;