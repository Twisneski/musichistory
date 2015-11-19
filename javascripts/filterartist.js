// define(["jquery", "get-more-songs", "firebase", "hbs!../templates/songs", "q", "getUnique", "filter", "delete"], 
//   function($, getmoresongs, firebase, songs, Q, getUnique, filter, delet){
// 		return function{allSongsArray} {
// 			var uniqueArtists = _.chain(allSongsArray)
// 								 .uniq("artist")
// 								 .pluck("artist")
// 								 .value();
// 			var uniqueArtists = _.uniq("artist");
// 								 .pluck("artist")
// 								 .value();

// 			var uniqueAlbums = _.chain(allSongsArray)
// 								.uniq('album.name')
// 								.pluck('album')
// 								.value();
// 		return {
// 			uniqueArtists: uniqueArtists,
// 			uniqueAlbums: uniqueAlbums
// 		}				 
// 	};
// });

// var matchingAlbums = _.chain(config.originalSongsArray)
//                       .filter((song) => song.artist === selectedArtist)
//                       .uniq('album.name')
//                       .pluck('album')
//                       .value();


