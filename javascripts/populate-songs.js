define(["jquery", "get-more-songs", "firebase", "hbs!../templates/songs"], 
  function($, getmoresongs, firebase, songs){


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
 
  

    
// return {
//     populateSongs: function(callbackFunctionReference) {
//       $.ajax({
//         url: "https://blistering-heat-398.firebaseio.com/.json",
//         method: "GET"
//             })
//       .done(function(jsonDataSentByjQuery) {
//         callbackFunctionReference(jsonDataSentByjQuery);
//         console.log("jsonDataSentByjQuery", jsonDataSentByjQuery);
//       });
//       }
//       };



// });

// Create a reference to your Firebase database dont need .json extension
var myFirebaseRef = new Firebase("https://blistering-heat-398.firebaseio.com/");

// Listen for when anything changes on the "songs" key
myFirebaseRef.child("songs").on("value", function(snapshot) {

  // Store the entire songs key in a local variable
  var allSongsObject = snapshot.val();

  $("#injectionSpot").html(songs({songs:allSongsObject}));
    console.log("injectionSpot", injectionSpot);

   
// creating an array from an object - duplicate where you put in the lodash file
    // var arr =
    //   $.map(allSongsObject, function (e) {
    //       return e;
    //   });

    // var uniqueArtist = duplicate.




  });

});



