function initialize() {

var myOptions =  {
   mapTypeId: google.maps.MapTypeId.ROADMAP,
     center: new google.maps.LatLng(30, -10),
     zoom: 2,
   disableDefaultUI: true
  };
  
var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
var lat_long_array = gon.lat_long_array;

for (var i = 0; i < lat_long_array.length; i++) {
  var lat_lngs = new google.maps.LatLng(lat_long_array[i][0], lat_long_array[i][1]);
  var marker = new google.maps.Marker({
    position: lat_lngs,
    animation: google.maps.Animation.DROP,
   });
   marker.setMap(map);
  };
};

google.maps.event.addDomListener(window, 'load', initialize);
