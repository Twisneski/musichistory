// define(["jquery", "javascripts/entry.js", "populate-songs.js", "get-more-songs.js"], 
//   function($, javascripts/entry.js){
// return {
//     getMeSomeData: function(callbackFunctionReference) {
//       $.ajax({...}).done(function(jsonDataSentByjQuery) {
//         callbackFunctionReference(jsonDataSentByjQuery);
//       }
//     }
//   }





// $(document).ready(function() {
  // console.log("documentReady");

//   var masterString = "";
//   var addMasterString = "";

//   $.ajax({
//     url: "data/mh.json"
//   }).done(function(contentsOfTheFile) {
//     // When you tell jQuery to read a file via the ajax method
//     // it reads the contents, and then executes whatever function
//     // that you specify here in the done() method, and passes in
//     // the contents of the file as the first argument.
//      for(var i= 0; i < contentsOfTheFile.songs.length; i++) {
//         var song = contentsOfTheFile.songs[i];
      
//       var songElement = "<li><button class='delete'>Delete</button><span class='song-name'>"+
//           song.title+" by "+song.artist+" on the album "+song.album+
//           "</span></li>"
//           console.log(songElement)             
//       masterString = masterString + songElement
//     }
//     // destination.html(masterString);
//     console.log(masterString)
//     // To completely replace the contents of a DOM element,
//     // we used to write element.innerHTML = "something new";
//     $("#injectionSpot").html(masterString);     
//   });

// //add more songs after splitting json file
//   function loadMore(){
//     $.ajax({
//       url: "data/mhaddl.json"
//     }).done(function(contentsOfTheFile) {
    
//        for(var i= 0; i < contentsOfTheFile.songs.length; i++) {
//           var song = contentsOfTheFile.songs[i];
        
//         var songElement = "<li><button class='delete'>Delete</button><span class='song-name'>"+
//             song.title+" by "+song.artist+" on the album "+song.album+
//             "</span></li>"
//             console.log(songElement)             
//         addMasterString = addMasterString + songElement
//       }
//       // destination.html(masterString);
//       console.log(addMasterString)
//       // To completely replace the contents of a DOM element,
//       // we used to write element.innerHTML = "something new";
//       $("#injectionSpot").append(addMasterString);     
//     });
//   }


//   $("#injectionSpot").on("click",".delete",deleteSong);

//   function deleteSong (event) {
//     var songToDelete = event.currentTarget.parentElement
//     $(songToDelete).remove();         
//     console.log(event.currentTarget)
//   }


//   $(".moreButton").click(loadMore);

  



// //When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.



// });




