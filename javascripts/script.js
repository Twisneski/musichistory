// $(document).ready(function(){  
//this is how you load just jquery. not needed for require.  use require/function and define/function for attached docs
require(["jquery", "bootstrap", "populate-songs", "get-more-songs", "hbs"], 
    function($, bootstrap, populate, getMoreSongs, hbs){

      function doSomethingWithTheData(SongsObject) {
      	
      	require(["hbs!../templates/songs"], function(songTemplate) {
      		$("#injectionSpot").append(songTemplate(SongsObject));
      		});
      		console.log("injectionSpot", injectionSpot);
      	require(["hbs!../templates/song"], function(songTemplate) {
      		$("#selectSong").append(songTemplate(SongsObject));
      		 });
      		console.log("selectSong", selectSong);
      	require(["hbs!../templates/album"], function(songTemplate) {
      		$("#selectAlbum").append(songTemplate(SongsObject));
      		 });
      		console.log("selectAlbum", selectAlbum);
      	require(["hbs!../templates/artist"], function(songTemplate) {
      		$("#selectArtist").append(songTemplate(SongsObject));
      		 });
      		 console.log("selectArtist", selectArtist);
 	}

      
        // populate.populateSongs(doSomethingWithTheData);
       



    });

