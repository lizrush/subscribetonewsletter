(function(){
  document.addEventListener( "DOMContentLoaded", function ( e ){

    //get the canvas
    var canvas = document.querySelector( "#browserchart" );
    //get the context
    var context = canvas.getContext( '2d' );
    //begin drawing
    
    var chromeheight = document.querySelector( '#chrome').innerHTML + 1;
    var firefoxheight = document.querySelector( '#firefox').innerHTML + 1;
    var safariheight = document.querySelector( '#safari').innerHTML + 1;
    var ieheight = document.querySelector( '#ie').innerHTML + 1;
    var otherheight = document.querySelector( '#other').innerHTML + 1;

    var drawBarRect = function( height, color, xCoord ){
      context.beginPath();
      // same width for all bars
      var rectWidth = 80;
      // height passed into function
      var rectHeight = height;
      // starting x coord passed into function
      var x = xCoord;
      // starting y coord dependent on height of bar
      var y = canvas.height - rectHeight;
      // .rect (x, y, width , height )
      // x y are top left
      context.rect( x, y, rectWidth, rectHeight );
      // set fill color passed in
      context.fillStyle = color;
      context.fill();
        };

    drawBarRect( chromeheight, 'DodgerBlue', 0 );
    drawBarRect( firefoxheight, 'DarkBlue', 100 );
    drawBarRect( safariheight, 'DeepSkyBlue', 200 );
    drawBarRect( ieheight, 'Cornflowerblue', 300 );
    drawBarRect( otherheight, 'Steelblue', 400 );
      });

})();