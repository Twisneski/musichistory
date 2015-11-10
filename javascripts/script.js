// $(document).ready(function(){  
//this is how you load just jquery. not needed for require.  use require/function and define/function for attached docs
require(["jquery", "bootstrap", "populate-songs", "get-more-songs", "hbs"], 
    function($, bootstrap, populate, getMoreSongs, hbs){

      function doSomethingWithTheData(SongsObject) {
      	require(["hbs!../templates/songs"], function(songTemplate) {
      		$("#injectionSpot").append(songTemplate(SongsObject));
      	});
      }

      populate.populateSongs(doSomethingWithTheData);
      getMoreSongs.loadMore(doSomethingWithTheData);




    });