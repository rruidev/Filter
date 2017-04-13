$(document).ready(function() {
	/*$( "#success" ).load( "resources/header.html", function( response, status, xhr ) {
	  if ( status == "error" ) {
	    var msg = "Sorry but there was an error: ";
	    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
	  }
	});*/
	$('#test').on("click", function(){
		alert("test");
	});
	$('.carousel').carousel();
    console.log( "ready!" );
});