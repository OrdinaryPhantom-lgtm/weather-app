const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const tempText = document.getElementById("temp");
const humidityText = document.getElementById("humidity");
const windText = document.getElementById("wind");
const message = document.getElementById("message");

async function getWeather(latitude, longitude, placeName) {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code");
  const data = await response.json();

  cityName.textContent = placeName;
  tempText.textContent = data.current.temperature_2m;
  humidityText.textContent = data.current.relative_humidity_2m;
  windText.textContent = data.current.wind_speed_10m;
}

async function getLocation(city) {
  const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1");
  const data = await response.json();

  if (!data.results) {
    message.textContent = "City not found. Check the spelling and try again.";
    return;
  }
  message.textContent = "";

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;
  const placeName = data.results[0].name;
  getWeather(latitude, longitude, placeName);
}

cityForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = cityInput.value;
  getLocation(city);
});