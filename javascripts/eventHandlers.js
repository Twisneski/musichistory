define(["jquery", "get-more-songs", "firebase", "hbs!../templates/songs", "q", "filter", "delete", "lodash", "hbs!../templates/artist", "hbs!../templates/album"], 
  function($, getmoresongs, firebase, songs, Q, filter, delet, _, artist, album){

 	$("#addLink").click(unhide);
    
  function unhide (event) {
  	console.log("is unhide working");
    event.preventDefault();  
    $("#entryMusic").show();
    $("#leftColumn").hide();
    $("#rightColumn").hide();   
  }

  $("#viewMusic").click(hide);

  function hide (event) {
    event.preventDefault();
    $("#rightColumn").show();
    $("#leftColumn").show();
    $("#entryMusic").hide();
  }

  console.log("getmoresongs", getmoresongs.addToSongList);
  $("#addMusic").click(getmoresongs.addToSongList);
    
  $("#filter").click(function() {
    console.log("filter", filter);
  });
});
      




  
