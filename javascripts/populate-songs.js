define(["jquery", "get-more-songs", "firebase", "hbs!../templates/songs", "q", "filter", "delete", "lodash", "hbs!../templates/artist", "hbs!../templates/album"], 
  function($, getmoresongs, firebase, songs, Q, filter, delet, _, artist, album){

  // Create a reference to your Firebase database dont need .json extension
  var myFirebaseRef = new Firebase("https://blistering-heat-398.firebaseio.com/");
  // Listen for when anything changes on the "songs" key
  myFirebaseRef.child("songs").on("value", function(snapshot) {
    // Store the entire songs key in a local variable
    var allSongsObject = snapshot.val();
    var allSongsArray = [];
    // Convert Firebase's object of objects into an array of objects
    for (var key in allSongsObject) {
      var songWithId = allSongsObject[key];
      songWithId.key = key;
      allSongsArray[allSongsArray.length] = songWithId;
    }
    console.log("allSongsArray",allSongsArray);

    console.log("allSongsObject", allSongsObject)

    // originalSongsArray = allSongsArray = allSongsArray.slice();
    //Bind the song object to the song list template

    $("#injectionSpot").html(songs({songs:allSongsArray}));
    console.log("injectionSpot", injectionSpot);

    $("#selectArtist").html(artist({artists:getUnique(allSongsArray).artist}));
    
    $("#selectAlbum").html(album({albums:getUnique(allSongsArray).album}));
  

  });
});
      




  


