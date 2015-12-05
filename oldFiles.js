// app.controller("TodoCtrl", ["$q", "$http", "$scope", "$routeProvider",function($q, $http, $scope, $routeProvider) {
// 	$scope.injectionSpot = "";
	

// // Return a promise for our async XHR
// return $q(function(resolve, reject) {
//   $http
//     .get('./data/mh.json')
//     .success(
//       function(objectFromJSONFile) {
//         resolve(objectFromJSONFile.songs);
//       },function(error) {
//         reject(error);
//       }
//     );
// });
	


	// var getSongs = $q(function(resolve, reject) {
 //      $http.get('./data/mh.json')
 //      .success(
 //        function(objectFromJSONFile) {
 //          resolve(objectFromJSONFile.songs);
 //        }, function(error) {
 //          reject(error);
 //        });
 //    });

	// 	getSongs.then(function (song) {
	// 	console.log("song",song);
	// 	$scope.injectionSpot = song;
	// 	}, 
	// 	function (error) {
	// 	console.log("Failed");
	// 	});

	//   var loadMore = $q(function(resolve, reject) {
	//       $http.get('./data/mhaddl.json')
	//       .success(
	//         function(objectFromJSONFile) {
	//           resolve(objectFromJSONFile.songs);
	//         }, function(error) {
	//           reject(error);
	//         });
	//     });

	// 	  loadMore.then(function (secondSong) {
	// 	    console.log("secondSong",secondSong);
	// 	    $scope.injectionSpot = $scope.injectionSpot.concat(secondSong);
	// 	  	}, 
	// 	  	function (error) {
	//     	console.log("Failed");
	// 		});