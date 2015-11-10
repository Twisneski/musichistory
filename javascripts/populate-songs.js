define(["jquery"], 
  function($){

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

    function addToSongList (event) {
    	console.log("addToSongList");
        $("#enterMusic").val();
        $("#userArtistInput").val();
        $("#userAlbum").val();    
    }

addingButton.click(function() {
    console.log(addingButton)
    
}
    function deleteSong(){
        $(this).parent().remove();
    }
    $(document).on("click", ".delete", deleteSong)



    $.ajax({
        url: "https://blistering-heat-398.firebaseio.com/.json"
    }).done(function(songData) {
        console.log("ajax run!");
        var source = $("#musicId").html();
        var template = Handlebars.compile(source);
        $("#dogtable").html(template(songData));
    });


return {
    populateSongs: function(callbackFunctionReference) {
      $.ajax({url: "https://blistering-heat-398.firebaseio.com/.json"})
      .done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
      });
    }
 };


});

//goal is to load a json file - no more complex then that

