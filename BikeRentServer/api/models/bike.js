//import {a} from './rent'
const mongoose = require('mongoose');

const rentSchema = mongoose.Schema({
    creationTime: Date
});

const bikeSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    type: String,
    price: Number,
    rent: rentSchema
});

module.exports = mongoose.model('Bike', bikeSchema);