$("#addSong").click(function(e){

var newSong = {
	title: $("#songName").val(),
	artist: $("#artistName").val(),
	album: {
		name: $("albumName").val(),
	}
};

$.ajax({
	url: "https://blistering-heat-398.firebaseio.com/.json"
	method: "POST",
	data: JSON.stringify(newSong);
	})
	.done:(function(addedSong) {
 	console.log("Your new song is", addedSong);
 	});
});