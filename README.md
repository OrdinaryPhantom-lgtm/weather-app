# Weather App

Type a city name and see its current temperature, humidity and wind speed. The data comes live from a free weather API, so it is always up to date.

![Weather App screenshot](Weather-App.png)

## Features

- Search any city in the world
- Shows temperature (°C), humidity (%) and wind speed (km/h)
- Shows a clear message when a city is not found

## How it works

1. You type a city and press Search
2. The app asks the Open-Meteo Geocoding API for the city's latitude and longitude
3. It then asks the Open-Meteo Forecast API for the current weather at that spot
4. The result is shown on the page

## Built with

- HTML
- CSS
- JavaScript (`fetch` and `async/await`)
- [Open-Meteo](https://open-meteo.com/) APIs (free, no API key needed)

## What I learned

- What an API is, and how to ask for data with `fetch`
- Waiting for a response with `async` and `await`
- Reading JSON data, step by step through its labels and lists
- Handling the case where nothing is found, so the page does not crash

## Run it on your computer

1. Download or clone this repo
2. Open `index.html` in your browser (you need an internet connection)

## Credits

Weather data by [Open-Meteo.com](https://open-meteo.com/).

## Author

[Your Name](https://github.com/YOUR-USERNAME)
