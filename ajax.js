$(document).ready(function() {
  console.log("documentReady");

var masterString = "";


  $.ajax({
    url: "data/mh.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.

    // console.log("the contents of songs.json");
    // console.log(contentsOfTheFile);
    // console.log(contentsOfTheFile.songs)
       for(var i= 0; i < contentsOfTheFile.songs.length; i++) {
          var song = contentsOfTheFile.songs[i];
        
        var songElement = "<li><span class='song-name'>"+
            song.title+" by "+song.artist+" on the album "+song.album+
            "</span></li>"
            console.log(songElement)             
        masterString = masterString + songElement
    }
     
     

   
    // destination.html(masterString);
    console.log(masterString)
    // To completely replace the contents of a DOM element,
    // we used to write element.innerHTML = "something new";
    $("#injectionSpot").html(masterString);

       

  });
});