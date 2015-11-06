define(["jquery"], 
  function($){


return {
    loadMore: function(callbackFunctionReference) {
      $.ajax({url: "../data/mhaddl.json"})
      .done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
      });
    }
 };

});




//goal is to load a json file - no more complex then


























 




