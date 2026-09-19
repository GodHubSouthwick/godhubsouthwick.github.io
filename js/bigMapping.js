
var bigMap = L.map("bigMap").setView(
  [54.923208, -1.406511],
  15,
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(bigMap);

var locationIcon2 = L.icon({
    iconUrl: "images/pin.png",
    iconSize: [24,36],
    iconAnchor: [8,36]
});

var marker = L.marker([54.923208, -1.406511], {icon: locationIcon2}).addTo(bigMap);
