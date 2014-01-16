(function(){
  document.addEventListener( "DOMContentLoaded", function ( e ){

    //get the canvas
    var canvas = document.querySelector( "#canvas" );
    //get the context
    var context = canvas.getContext( '2d' );
    //begin drawing
    
    var drawBarRect = function( height, color, xCoord ){
      context.beginPath();
      // same width for all bars
      var rectWidth = 50;
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

    drawBarRect( 100, 'blue', 75 );
    drawBarRect( 200, 'orange', 200 );
      });

})();