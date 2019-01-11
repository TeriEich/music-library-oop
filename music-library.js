var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  // FUNCTIONS TO IMPLEMENT:

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    for (var list in this.playlists) {
      var playlist = this.playlists[list];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
      }
    },

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    for (var track in this.tracks) {
      var song = this.tracks[track];
      console.log(`${song.id}: ${song.name} by ${song.artist} (${song.album})`);
    }
  },

  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var playlist = this["playlists"][playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);

    for (var track of playlist.tracks) {
      var song = this.tracks[track];
      console.log(`${song.id}: ${song.name} by ${song.artist} (${song.album})`);
    }
  },

  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    var track = this['tracks'][trackId];
    var playlist = this['playlists'][playlistId];
    var playlistTracks = playlist.tracks;

    playlistTracks.push(trackId);

    //test code:
    console.log(`Updated playlist: `, playlist);
  },

  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // adds a track to the library

  addTrack: function (name, artist, album) {
    var newId = 't' + this.uid();
    this['tracks'][newId] = {
      id: newId,
      name: name,
      artist: artist,
      album: album,
    };
    console.log(this.tracks);
  },

  // adds a playlist to the library

  addPlaylist: function (name) {
    var newId = 'p' + this.uid();
    this['playlists'][newId] = {
      id: newId,
      name: name,
      tracks: []
    };
    console.log(this.playlists);
  }
}


//invoking the functions:

 library.printPlaylists();
console.log(`--------------------------------------------`);


library.printTracks();
console.log(`--------------------------------------------`);


//test code:
library.printPlaylist('p01');
library.printPlaylist('p02');
console.log(`--------------------------------------------`);

//test code:
library.addTrackToPlaylist('t01', 'p02');
console.log(`--------------------------------------------`);

//test code:
library.addTrack('Under Pressure', 'Queen', 'Best of Queen');
console.log(`--------------------------------------------`);

//test code:
library.addPlaylist('new playlist');
console.log(`--------------------------------------------`);
/*
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

*/