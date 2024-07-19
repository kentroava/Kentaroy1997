function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 8.933964, lng: 125.545281};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}



