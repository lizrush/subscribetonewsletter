(function(window){
  document.addEventListener( 'DOMContentLoaded' , function( e ){
    var canvas = document.getElementById('mobilechart'),
      context = canvas.getContext( '2d' );

    var mobileVisitorsEl = document.querySelector( '#mobile_visits' ),
        nonmobileVisitorsEl = document.querySelector( '#nonmobile_visits' ),
        mobileVisitors = parseInt( mobileVisitorsEl.innerHTML, 10 ),
        nonmobileVisitors = parseInt( nonmobileVisitorsEl.innerHTML, 10 ),
        totalVisitors = mobileVisitors + nonmobileVisitors;

    var newInRads = (mobileVisitors/nonmobileVisitors) * (Math.PI*2),
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
    context.textAlign = 'left';
    context.fillText( 'Mobile Visitors', 360, 113 );
    context.fillText( 'Non-Mobile Visitors', 360, 148);
  });
}(this));