
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
            changeLocation(response.data.results[0].geometry.location);
    
        })
        .catch(function(error){
            console.log(error);
        });
        }

        function changeLocation(coords) {
        map = new google.maps.Map(document.getElementById("googleMap"), {
          zoom: 11,
          center: coords,
        });
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
        });
      }