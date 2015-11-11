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


    $("#addMusic").click(addToSongList);

    
        
    });

    
return {
    populateSongs: function(callbackFunctionReference) {
      $.ajax({
        url: "https://blistering-heat-398.firebaseio.com/.json",
      }
      .done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
      }));
    }
 };
});



