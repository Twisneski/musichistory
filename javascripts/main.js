$("#addSong").click(function(e){

var newSong = {
	title: $("#songName").val(),
	artist: $("#artistName").val(),
	album: {
		name: $("albumName").val(),
	}
};

// $.ajax({
// 	url: "https://blistering-heat-398.firebaseio.com/.json"
// 	method: "POST",
// 	data: JSON.stringify(newSong);
// 	})
// 	.done:(function(addedSong) {
//  	console.log("Your new song is", addedSong);
//  	});

return function() {
    var deferred = Q.defer();

    $.ajax({
      url: "https://blistering-heat-398.firebaseio.com/"
      method: "POST",
      data JSON.stringify(newSong);
    })
    .done(function(songs_data) {
      deferred.resolve(songs_data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });

    return deferred.promise;

  }

});


