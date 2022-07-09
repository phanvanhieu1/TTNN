const path = require("path");
const multer = require("multer");
const fs=require("fs");

var Citys = require('../models/city.model');
var Districts = require('../models/district.model');
var ward = require('../models/ward.model');
var News =require('../models/News/news.model');

const getWard = async (req, res) => {
    const district = await Districts.findOne({ _id: req.params.id });
    const wards = await ward.find({ district: district._id });
    res.json(wards);
}
module.exports = {
    getWard,
}

