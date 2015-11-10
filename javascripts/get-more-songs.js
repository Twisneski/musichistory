define(["jquery"], 
  function($){


return {
    loadMore: function(callbackFunctionReference) {
      $.ajax({url: "https://blistering-heat-398.firebaseio.com/.json"})
      .done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
      });
    }
 };

});




//goal is to load a json file - no more complex then


























 




