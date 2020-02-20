// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoibWJoMzI5IiwiYSI6ImNrNnUyejFycTA1bzAzbXBtb205cW53NmUifQ.9yI7-YS_XsPUNaTKblgY8w';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-73.987, 40.735]
var initialZoom = 10.67


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/streets-v11', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// make a single marker in central park
 new mapboxgl.Marker()
   .setLngLat([-73.974087,40.770718])
   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('I am in Central Park'))
   .addTo(map);


// iterate over each object in studentData
buildData.forEach(function(buildEntry) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([buildEntry.longitude, buildEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`The ${buildEntry.name} located at  ${buildEntry.street_location} is my favorite building!`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#chicago').on('click', function() {
  map.flyTo({
    center: [-87.627838, 41.876301],
    zoom: initialZoom
  })
})

$('#denver').on('click', function() {

  var denverLngLat = [-105.000076, 39.753170]

  map.flyTo({
    center: denverLngLat,
    zoom: initialZoom
  })
})

$('#seattle').on('click', function() {
  var seattleLngLat = [-122.333488, 47.602188]

  map.flyTo({
    center: seattleLngLat,
    zoom: initialZoom
  })
})

$('#sanfran').on('click', function() {
  var sanfranLngLat = [-122.404870, 37.796400]

  map.flyTo({
    center: sanfranLngLat,
    zoom: initialZoom
  })
})

$('#losangeles').on('click', function() {
  var losangelesLngLat = [-118.300400, 34.118271]

  map.flyTo({
    center: losangelesLngLat,
    zoom: initialZoom
  })
})

$('#providence').on('click', function() {
  var providenceLngLat = [-71.401790, 41.822580 ]

  map.flyTo({
    center: providenceLngLat,
    zoom: initialZoom
  })
})

$('#newpaltz').on('click', function() {
  var newpaltzLngLat = [-74.085430, 41.744140]

  map.flyTo({
    center: newpaltzLngLat,
    zoom: initialZoom
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
