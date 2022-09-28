function initMap() {
  let location = { lat: 39.0119, lng: -98.4842 };
  var map = google.maps.Map;
  map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 3,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  google.maps.event.addListener(map, "click", function (event) {
    changeLocation(event.latLng);
  });
geocode();
}

function changeLocation(coords) {
    console.log(coords.lat, coords.lng);
    // document.getElementById("latLng").value = coords.lat + "," + coords.lng;
    document.getElementById("latLng").value = coords.toUrlValue();
  map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 11,
    center: coords,
  });
  var marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
  google.maps.event.addListener(map, "click", function (event) {
    changeLocation(event.latLng);
  });
}

var locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', geocodeEvent);

function geocodeEvent(e){
    e.preventDefault();
    geocode();
    }

    function geocode(){
        var map = google.maps.Map;
        var location = document.getElementById('location-input').value;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params:{
                address: location,
                key: 'AIzaSyA246nlIjYYGu89FdDHR5g0NiJbIyr9L3k'
            }
        })
        .then(function(response){
            console.log(response);
            changeLocation(response.data.results[0].geometry.location);
            document.getElementById("latLng").value = response.data.results[0].geometry.location.lat + "," + response.data.results[0].geometry.location.lng

    
        })
        .catch(function(error){
            console.log(error);
        });
        google.maps.event.addListener(map, "click", function (event) {
            changeLocation(event.latLng);
          });
        }

