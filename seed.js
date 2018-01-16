// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");
  // put data here!
var albumsList =[
  {
    artistName: 'Led Zeppelin',
    name: 'Led Zeppelin IV',
    releaseDate: 'November 8, 1971',
    genres: ['Rock', 'Metal']
  },
  {
    artistName: 'NoBunny',
    name: 'First Blood',
    releaseDate: 'September 21, 2010',
    genres: ['Garage Rock, Punk Rock, Power Pop']
  }

];

/*  Approximate schema for these seeds
var SongSchema = new Schema({
  name: String,
  trackNumber: Number,
});
*/

/*
var sampleSongs = [];

sampleSongs.push({ name: 'Swamped',
                   trackNumber: 1
});
sampleSongs.push({ name: "Heaven's a Lie",
                   trackNumber: 2
});
sampleSongs.push({ name: 'Daylight Dancer',
                   trackNumber: 3
});
sampleSongs.push({ name: 'Humane',
                   trackNumber: 4
});
sampleSongs.push({ name: 'Self Deception',
                   trackNumber: 5
});
sampleSongs.push({ name: 'Aeon',
                   trackNumber: 6
});
sampleSongs.push({ name: 'Tight Rope',
                   trackNumber: 7
}); */

db.Album.remove({}, function(err, albums){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all albums');

  db.Album.create(albumsList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });
}
});
