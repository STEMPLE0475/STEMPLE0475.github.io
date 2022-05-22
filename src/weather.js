function can(position) {
  const KEY = "ec14a5ab72a58ee2713157124ccccb10";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      const temp = document.querySelector(".temp");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
  //console.log(url);
}
function cant() {
  console.log("Weather failed");
}

navigator.geolocation.getCurrentPosition(can, cant);
