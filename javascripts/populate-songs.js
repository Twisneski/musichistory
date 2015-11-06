define(["jquery"], 
  function($){


return {
    populateSongs: function(callbackFunctionReference) {
      $.ajax({url: "../data/mh.json"})
      .done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
      });
    }
 };
});

//goal is to load a json file - no more complex then that

