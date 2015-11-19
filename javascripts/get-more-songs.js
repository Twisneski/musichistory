define(["jquery", "script"], 
  function($, script){

return {

		addToSongList: function  () {
       
		    var songInput = $("#userSongInput").val();
        var album = $("#userAlbum").val(); 
        var artist = $("#userArtistInput").val();
        console.log("artist", artist);
        console.log("album", album);
        console.log("songInput", songInput);
       
        var getSongObj = {
          album: album,
          artist: artist,
          title: songInput
        };
    
      $.ajax({url: "https://blistering-heat-398.firebaseio.com/songs.json",
        method: "POST",
        data: JSON.stringify(getSongObj)})
          .done(function(jsonDataSentByjQuery) {
       
      });
    }
 };

}); //END OF DEFINE FUNCTION

//this file is NO longer used


//goal is to load a json file - no more complex then


























 




