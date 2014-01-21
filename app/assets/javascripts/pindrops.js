
// var lat_lngs;
// for (var i = 0; i < lat_lngs.length; i++) {
//    var = marker = new google.maps.Marker({
//     position: lat_lngs;
//    });
//    marker.setMap(map);
// };


// var pinsToDrop = new google.maps.LatLng()

var myOptions = { mapTypeId: google.maps.MapTypeId.ROADMAP };
var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': 'US'}, function (results, status) {
    var ne = results[0].geometry.viewport.getNorthEast();
    var sw = results[0].geometry.viewport.getSouthWes
    map.fitBounds(results[0].geometry.viewport);               
  }); 

// To add the marker to the map, call setMap();
// marker.setMap(map);