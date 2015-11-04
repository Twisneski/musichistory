requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});
require(
	["script"],
	function ($) {

});

// require(
//   ["jquery", "bread"], 
//   function($, bread) {

//   }
// );
//this actually means bread.js the file you need to execute this file first whatever that returns and executes the function of the bread prices
	// var ryePrice = bread.breadPrice("rye");
	// var briePrice = cheese.cheesePrice("brie");
	// console.log("ryePrice", ryePrice);






