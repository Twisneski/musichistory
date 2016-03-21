//this adds a new song to dom
app.controller("SongCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

  // Just like in the RequireJS version of Music History, make a reference
    var ref = new Firebase("https://blistering-heat-398.firebaseio.com/songs");
    syncObject.$bindTo($scope, "songs");
  // Instead of snapshot.val(), use this syntax to get songs
    $scope.songs = $firebaseArray(ref);

  }
]);








