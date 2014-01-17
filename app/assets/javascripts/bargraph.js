(function(){
  document.addEventListener( "DOMContentLoaded", function ( e ){

    //get the canvas
    var canvas = document.querySelector( "#browserchart" );
    //get the context
    var context = canvas.getContext( '2d' );
    //begin drawing
    
    var chromeUsers = document.querySelector( '#chrome').innerHTML,
        firefoxUsers = document.querySelector( '#firefox').innerHTML,
        safariUsers = document.querySelector( '#safari').innerHTML,
        ieUsers = document.querySelector( '#ie').innerHTML,
        otherUsers = document.querySelector( '#other').innerHTML;

//make fuction to find largest set of users

    var sHeight = 270,
        cHeight = (chromeUsers*100/safariUsers)*270/100,
        fHeight = (firefoxUsers*100/safariUsers)*270/100,
        iHeight = (ieUsers*100/safariUsers)*270/100,
        oHeight = (otherUsers*100/safariUsers)*270/100,
        yText   = canvas.height - 3;
    
    context.font = '10pt Helvetica';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText( chromeUsers, 25, yText - cHeight );
    context.fillText( firefoxUsers, 100, yText - fHeight );
    context.fillText( safariUsers, 175, yText - sHeight);
    context.fillText( ieUsers, 250, yText - iHeight );
    context.fillText( otherUsers, 320, yText - oHeight );
    
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

    drawBarRect( cHeight, 'DodgerBlue', 0 );
    drawBarRect( fHeight, 'DarkBlue', 75 );
    drawBarRect( sHeight, 'DeepSkyBlue', 150 );
    drawBarRect( iHeight, 'Cornflowerblue', 225 );
    drawBarRect( oHeight, 'Steelblue', 300 );

    var drawLegendRect = function(color, y){
      context.beginPath();
    
      context.rect(400, y, 25, 25);
      context.fillStyle = color;
      context.fill();
      };
    
    drawLegendRect('DodgerBlue', 30);
    drawLegendRect('DarkBlue', 80);
    drawLegendRect('deepskyblue', 130);
    drawLegendRect('Cornflowerblue', 180);
    drawLegendRect('Steelblue', 230);


    context.font = '10pt Helvetica';
    context.fillStyle = 'black';
    context.textAlign = 'left';
    context.fillText( 'Chrome', 430, 45 );
    context.fillText( 'Firefox', 430, 95);
    context.fillText( 'Safari', 430, 145);
    context.fillText( 'IE', 430, 195);
    context.fillText( 'Other', 430, 245);
      });

})();