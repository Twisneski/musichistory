app.controller("SongFormCtrl", 
  [
  "$scope", 
  "$firebaseArray", 
  function($scope, $firebaseArray)  {


    var ref = new Firebase("https://blistering-heat-398.firebaseio.com/songs");
    
    $scope.newMessageText= "";
    $scope.songs = $firebaseArray(ref);
    $scope.newSong = { artist: "", album: "", title: ""};
    
      $scope.addSong = function() {
      $scope.songs.$add({
        title:  $scope.newSong.title,
        artist: $scope.newSong.artist,
        album:  $scope.newSong.album
        
      });

      }
     }
  
  ]);






//     "$scope", 
//     "simple-songs", 
//     function($scope, simple_songs) {
//       $scope.newSong = { artist: "", album: "", name: ""};

//       $scope.addSong = function() {
//         simple_songs.addSong({
//           artist: $scope.newSong.artist,
//           name: $scope.newSong.name,
//           album: $scope.newSong.album
//         });
//       };
//     }
//   ]
// );


// app.controller("SongFormCtrl",["$scope", "simple-songs", 
//     function($scope, simpleSongs) {
//       //$scope.song_list = simple_songs.getSongs();  // Returns all songs


//       simpleSongs.loadSongs().then(
//         function () {
//           $scope.songs = simpleSongs.getSongs();
//         },
//         function (error) {
//           console.log(error);
//         }
//       );
//     }
//   ]
// );