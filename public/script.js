function initMap() {
  const myLatlng = {lat: -25.363, lng: 131.044};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });

  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);


    var clickedLatLong = JSON.stringify(mapsMouseEvent.latLng.toJSON())
    // show map clicks of the current user
    document.getElementById("clicks").insertAdjacentHTML('beforeend', clickedLatLong + '</br>')

    // TODO: figure out how to send each clickedLatLong
    // to the server, save them in some persistent way,
    // make the server send the record of all map clicks
    // back here, so they can all go into the "clicks" div

  });
}

window.initMap = initMap;
