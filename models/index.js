var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely-lab-master")

module.exports.Album = require('./album.js');
