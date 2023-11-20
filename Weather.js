let temperatureElement = document.querySelector(".temperature");
let windSpeedElement = document.querySelector(".windSpeed");

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong!');
  })
  .then(data => {
  
    let currentTemperature = data.current.temperature_2m;
    let currentWindSpeed = data.current.wind_speed_10m;

    temperatureElement.textContent = currentTemperature;
    windSpeedElement.textContent = currentWindSpeed;
  })
  .catch(error => {
    console.error('Error: ', error);
  });