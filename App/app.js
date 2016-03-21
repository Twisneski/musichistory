var app = angular.module("app", ["firebase", "ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list/', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongListCtrl'
      }).
      when('/songs/new/', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongFormCtrl'
      }).
      when('/songs/detail/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      })
      .otherwise('/songs/list');
}]);




