define(["jquery", "get-more-songs"], 
  function($, getmoresongs){


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
        
  

    
return {
    populateSongs: function(callbackFunctionReference) {
      $.ajax({
        url: "https://blistering-heat-398.firebaseio.com/.json",
        method: "GET"
              })
      .done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
        console.log("jsonDataSentByjQuery", jsonDataSentByjQuery)
      });
    }
  };
});





