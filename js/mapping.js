var map = L.map("map").setView([54.923, -1.393], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

var locationIcon = L.icon({
    iconUrl: "images/pin.png",
    iconSize: [24,36],
    iconAnchor: [-24,20]
});


var marker = L.marker([54.923208, -1.406511], {icon: locationIcon}).addTo(map);
