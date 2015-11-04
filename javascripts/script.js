// $(document).ready(function(){

require(
    ["jquery"],
    function ($) {


            var entryMusic = $("#entryMusic");
        entryMusic.hide();

        // var songs = [];

        // songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
        // songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
        // songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
        // songs[songs.length] = "Welco(me to the Jungle > by Guns and Roses on the album Appetite for Destruction";
        // songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

        // // console.log('the songs length is '+songs.length);

        // songs.unshift("Down with the Sickness > Disturbed on the album Sickness");

        // songs[songs.length] = "End Song Name";

       
        // var destination = $('#injectionSpot')
        // var masterString = "";

        // var songElement
        // for (var i = 0; i < songs.length; i++) {
        //     var song = songs[i];
        //     songs[i] = song
        //     .replace(">", "-")
        //     .replace("*","")
        //     .replace("@","")
        //     .replace("(","")
        //     .replace("!","")
        //     // console.log(song)
           
        //     songElement = "<li><span id='songname1' class='song-name'>"
        //                      + songs[i] + "</span></li>"
        //     masterString = masterString + songElement
        // }
            // console.log("final:")
            // console.log( songs ); 

       
        // destination.html(masterString);
        // console.log(masterString)


        

        $("#addLink").click(unhide);

        
        function unhide (event) {
            event.preventDefault();  
            entryMusic.show();
            $("#leftColumn").hide();
            $("#rightColumn").hide();
        
        }

        $("#viewMusic").click(hide);

        function hide (event) {
            event.preventDefault();
            $("#rightColumn").show();
            $("#leftColumn").show();
            entryMusic.hide();

        }


        $("#addMusic").click();

        function addToSongList (event) {
            $("#enterMusic").val();
            $("#userArtistInput").val();
            $("#userAlbum").val();
        
        }

        $("#Boxed").css ({
            "width": "1075px",
            "height": "45px",
            "background-color": "yellow",
            "margin": "0 0 0 50px",
            "padding": "15px 0 0 15px",
            "border": "2px solid black",
            "position": "fixed; top: 0em",  
     
        });


});
    
 

// });

// for (i = 0; i < injectionSpot.length; i++) { 
//     text += cars[i] + "<br>";
// }





