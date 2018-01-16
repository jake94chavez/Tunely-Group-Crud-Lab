var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Songs = require('./songs.js')

var AlbumSchema = new Schema ({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: String,
  Songs: [SongsSchema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
