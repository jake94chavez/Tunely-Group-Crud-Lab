var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema ({
    name: String,
    trackNumber: Number
});

var Song = mongoose.model('Songs', SongsSchema);

module.exports = Songs;
