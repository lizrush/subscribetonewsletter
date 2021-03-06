(function(window){
  document.addEventListener( 'DOMContentLoaded' , function( e ){
    var canvas = document.getElementById('returningchart'),
      context = canvas.getContext( '2d' );

    var newVisitorsEl = document.querySelector( '#new_visitors' ),
        retVisitorsEl = document.querySelector( '#returning_visitors' ),
        newVisitors = parseInt( newVisitorsEl.innerHTML, 10 ),
        retVisitors = parseInt( retVisitorsEl.innerHTML, 10 ),
        totalVisitors = newVisitors + retVisitors;

    var newInRads = (newVisitors/totalVisitors) * (Math.PI*2),
      retInRads = (Math.PI*2) - newInRads;

    var originX = canvas.width/3,
      originY = canvas.height/2,
      radius = canvas.height/2 - 10,
      counterClockwise = false;

    var newInRadsPercent = parseInt((newInRads/(newInRads + retInRads)) * 100, 10),
      retInRadsPercent = 100 - newInRadsPercent;

    context.beginPath();
    context.moveTo( originX, originY );
    context.arc( originX, originY, radius, 0, newInRads, counterClockwise );
    context.closePath();
    context.fillStyle = 'navy';
    context.fill();

    context.beginPath();
    context.moveTo( originX, originY );
    context.arc( originX, originY, radius, newInRads, newInRads + retInRads, counterClockwise );
    context.closePath();
    context.fillStyle = 'deepskyblue';
    context.fill();

    var drawLegendRect = function(color, y){
    context.beginPath();
    
    context.rect(325, y, 25, 25);
    context.fillStyle = color;
    context.fill();
    };
    
    drawLegendRect('navy', 100);
    drawLegendRect('deepskyblue', 135);

    
    context.font = '10pt Helvetica';
    context.fillStyle = 'black';
    context.fillStroke = 'black'
    context.textAlign = 'left';
    context.fillText( 'New Visitors', 360, 113 );
    context.fillText( 'Returning Visitors', 360, 148);
  });
}(this));