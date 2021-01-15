function main(){
  var map = L.map('map').setView([37.192524, -3.616371], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([37.192524, -3.616371]).addTo(map)
      .bindPopup("Jungle home")
      .openPopup();
  }

  window.addEventListener('load',main);
