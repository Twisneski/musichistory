 // Notice the new syntax. Since I'm including one of my own dependencies
  // then I need to include each one in array of strings (just like RequireJS)
  // and have a matching argument in the callback function.
app.controller("SongListCtrl",["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
      

      var ref = new Firebase("https://blistering-heat-398.firebaseio.com/songs");
      $scope.songs = $firebaseArray(ref);
      

     $scope.deleteSong = function(song){
      console.log("song", song);
      //target object
      var songIndex = $scope.songs.indexOf(song);
      console.log("songIndex", songIndex);
      //target index aka place of item in array
      if(songIndex >= 0)   
        $scope.songs.$remove(songIndex, 1);
      //remove the item targeted in the array.  The 1 is to target only one item not the location of the item.
     }
     //delete songs from firebase

      }
  ]);



