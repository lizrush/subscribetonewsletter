function initialize() {

var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
var myOptions = { mapTypeId: google.maps.MapTypeId.ROADMAP };
var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': 'US'}, function (results, status) {
    var ne = results[0].geometry.viewport.getNorthEast();
    var sw = results[0].geometry.viewport.getSouthWes
    map.fitBounds(results[0].geometry.viewport);               
  }); 

var lat_long_array = gon.lat_long_array;
alert(gon.lat_long_array);

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