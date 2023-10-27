  function muestraposicion(posicion){
    const latitud=posicion.coords.latitude;
    const longitud=posicion.coords.longitude;
    const mapLink = document.querySelector("#map-link");
    /*document.write(latitud + " " + longitud);*/
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;
    mapLink.textContent = `Latitude: ${latitud} °, Longitude: ${longitud} °`;
    var map = L.map('map').setView([latitud, longitud], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    var marker = L.marker([latitud, longitud]).addTo(map);
    
  }
  function geolocalizacion(){
    navigator.geolocation.getCurrentPosition(muestraposicion);
   }
    