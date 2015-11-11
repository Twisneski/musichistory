define(["jquery", "script"], 
  function($, script){


return {

		addToSongList: function  () {
    	console.log("addToSongList");
       

		var songInput = $("#userSongInput").val();
        var album = $("#userAlbum").val(); 
        var artist = $("#userArtistInput").val();
        console.log("artist", artist);
        console.log("album", album);
        console.log("songInput", songInput);

    
      $.ajax({url: "https://blistering-heat-398.firebaseio.com/.json"})
        method: "POST",
        data: JSON.stringify(newSongElement)
      .done(function(jsonDataSentByjQuery) {
       
      });
    }
 };

});

//this file is NO longer used


//goal is to load a json file - no more complex then


























 




