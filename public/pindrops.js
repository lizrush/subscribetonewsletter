
var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

var lat_longs = [[-25.363882,131.044922],[25.363882,131.044922]]

var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
alert("foo");
for (var i = lat_longs.length - 1; i >= 0; i--) {

  var myLatlng = new google.maps.LatLng(lat_longs[i][0], lat_longs[i][1]);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
};


// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });

// // To add the marker to the map, call setMap();
// marker.setMap(map);