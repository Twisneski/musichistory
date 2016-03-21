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

