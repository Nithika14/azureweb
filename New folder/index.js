const weather = document.getElementById("weather");
let url =
  "http://api.weatherapi.com/v1/current.json?key=6b43a5d97b1b4898b37230458211511&q=London&aqi=no";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    weather.textContent = data.current.temp_c + "°C";
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
    weather.textContent = "Unable to fetch weather data.";
  });

function clicked() {
  alert("You clicked the button!");
}
