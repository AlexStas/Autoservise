var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 53.845403,
            lng: 27.412732
        },
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 53.845403,
            lng: 27.412732
        },
        map: map,
        title: 'Наш маркер: Большой театр'
    });
}