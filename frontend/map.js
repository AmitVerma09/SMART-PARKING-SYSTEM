var map = L.map('map').setView([23.16867, 79.93681], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Define red icon
var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Add markers

var marker1 = L.marker([23.170447780922313, 79.92694588212515], { icon: redIcon }).addTo(map).bindPopup("Parking A - Gol bazar").bindTooltip("Parking A - Gol bazar", { permanent: false, direction: "top" })
  .on('click', function () {
    window.location.href = "index.html";
  });
var marker2 = L.marker([23.201845256911238, 79.91281873785051], { icon: redIcon }).addTo(map).bindPopup("Parking B - shir ram college").bindTooltip("Parking B - shir ram college", { permanent: false, direction: "top" })
  .on('click', function () {
    window.location.href = "index.html";
  });
var marker3 = L.marker([23.197773753167134, 79.90707279367183], { icon: redIcon }).addTo(map).bindPopup("Parking C - chungi naka").bindTooltip("Parking C - chungi naka", { permanent: false, direction: "top" })
  .on('click', function () {
    window.location.href = "index.html";
  });
var marker4 = L.marker([23.16635430425248, 79.95027314108285], { icon: redIcon }).addTo(map).bindPopup("Parking D - Railway station").bindTooltip("Parking D - Railway station", { permanent: false, direction: "top" })
  .on('click', function () {
    window.location.href = "index.html";
  });
var marker5 = L.marker([23.193025558443786, 79.92578673017887], { icon: redIcon }).addTo(map).bindPopup("Parking E - damoh naka").bindTooltip("Parking E - damoh naka", { permanent: false, direction: "top" })
  .on('click', function () {
    window.location.href = "index.html";
  });