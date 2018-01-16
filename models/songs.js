var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema ({
    name: String,
    trackNumber: Number
});

var Songs = mongoose.model('Songs', SongsSchema);

module.exports = Songs;
