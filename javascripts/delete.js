define(["jquery", "firebase", "hbs!../templates/songs", "q", "populate-songs"], 
  function($, firebase, songs, Q, populate){
  console.log("delete.js file");

	var eventHandlers = function() { };

	eventHandlers.prototype.updateSongs = function(songArray) {
		config.originalSongsArray = songArray;
	};

	eventHandlers.prototype.init = function(options) {

		//This is to delete items from firebase
		$(document).on("click", ".deleteButton", function() {
			
			console.log("is delete button working, nope not yet");
			// Removing selected item from DOM
			var songKey = $(this).attr("id");
			console.log("songKey", songKey);
			$.ajax({
			  url: "https://blistering-heat-398.firebaseio.com/songs/" + songKey +".json",
			  method: "DELETE"
			})
			.done(function(response) {
			  console.log("should be deleted, but of course it wont cause i did it");
				console.log("response", response);
			});	
		});
	}
});









		