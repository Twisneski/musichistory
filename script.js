$(document).ready(function(){

    var entryMusic = $("#entryMusic");
    entryMusic.hide();

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
        "border": "1px solid black",
        "width": "1075px",
        "height": "45px",
        "background-color": "yellow",
        "margin": "0 0 0 50px",
        "padding": "15px 0 0 15px",
        "border": "2px solid black",
        "position": "fixed; top: 0em",
    });
});





