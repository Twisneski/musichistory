define(["jquery", "get-more-songs", "firebase", "hbs!../templates/songs", "q", "getUnique"], 
  function($, getmoresongs, firebase, songs, Q, getUnique){
    console.log("whatever");
    

    //Update event handlers with new data
    // eventHandlers.updateSongs(originalSongsArray);

    function getUnique(allSongsArray) {
      console.log('get unique function');
        var selectArtist = _.chain(allSongsArray).uniq("artist").pluck("artist").value();
        var selectAlbum = _.chain(allSongsArray).uniq('album.name').pluck('album').value();
      console.log({ artist: selectArtist, album: selectAlbum })
      return { artist: selectArtist, album: selectAlbum }
    };

      var config = {
        originalSongsArray: []
    };

    var eventHandlers = function() { };

    eventHandlers.prototype.updateSongs = function(songArray) {
      config.originalSongsArray = songArray;
    };

    eventHandlers.prototype.init = function(options) {

    // Handle the user click on the "Clear Filter" button
    $(".clearFilter").click(function(e) {
      console.log("clickclear");
   

      // Here's where I reset the filtered array back to 
      // the value of the copy I created above
      // allSongsArray = config.originalSongsArray;
          
      var unique = getUnique(allSongsArray.originalSongsArray);

      console.log("THIS IS THE THING", unique)

      $("#selectSong").html(templates.songs({songs: config.originalSongsArray}));
        console.log("selectSong", selectSong);
      // Create unique artists again before binding to template
      $("#selectArtist").html(templates.artist({artists:unique.artists}));
        console.log("selectArtist", selectArtist);
      // Create unique albums again
      $("#selectAlbum").html(templates.album({albums:unique.albums}));
        console.log("selectAlbum", selectAlbum);
    });

    /*
      When user selects an artist, filter the album select element
      and the song list accordingly
     */
    $(document).on("click", "#selectArtist li > a", function(e){
      var selectedArtist = this.innerHTML;
      var matchingAlbums = _.chain(config.originalSongsArray)
                            .filter(function(song) {
                              return song.selectArtist === selectedArtist;
                            })
                            .uniq('selectAlbum.name')
                            .pluck('selectAlbum')
                            .value();
      $("#selectAlbum").html(templates.album({selectAlbum:matchingAlbums}));
        console.log("selectAlbum", selectAlbum);
      allSongsArray = _.filter(config.originalSongsArray, function(song) {
        return song.artist === selectedArtist;
      });
      $("#songList").html(templates.songs({songs:allSongsArray}));

    });

    /*
      When the user selects an album, filter the artist select element
      and the song list accordingly
     */
    $(document).on("click", "#albums li > a", function(e){
      var selectedYear = $(this).attr("year");
      var selectedAlbum = this.innerHTML;

      var matchingArtists = _.chain(config.originalSongsArray)
                            .filter(function(song) {
                              return song.album.name === selectedAlbum;
                            })
                            .uniq('artist')
                            .pluck('artist')
                            .value();
      $("#selectArtist").html(templates.artist({selectArtists:matchingArtists}));

      allSongsArray = _.filter(config.originalSongsArray, function(song) {
        return song.album.name === selectedAlbum;
      });
      $("#songList").html(templates.songs({songs:allSongsArray}));
    });
  };
});

  // return new eventHandlers();
