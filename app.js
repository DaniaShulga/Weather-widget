"use strict";

const weatherBlock = document.querySelector("#weather");

async function loadWeather(e) {
  weatherBlock.innerHTML = `
  <div class="weather__loading">
    <img src="images/loading-image.gif" alt="Loading...">
  </div>`;

  const server =
    "https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

  const responce = await fetch(server, {
    method: "GET",
  });

  const responceResult = await responce.json();

  if (responce.ok) {
    getWeather(responceResult);
  } else {
    weatherBlock.innerHTML = responceResult.message;
  }
}

function getWeather(data) {
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `
  <div class="weather__header">
  <div class="weather__main">
      <div class="weather__city">${location}</div>
      <div class="weather__status">${weatherStatus}</div>
  </div>
  <div class="weather__icon">
      <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
  </div>
</div>
<div class="weather__temp">${temp}</div>
<div class="weather__feels-like">Feels like: ${feelsLike}</div>
  `;

  weatherBlock.innerHTML = template;
}

if (weatherBlock) {
  loadWeather();
}

// fetch()
//   .then((response) => response.json())
//   .then((data) => {
//     let city = document.querySelector(".city_name");
//     let temperature = document.querySelector(".temp");
//     let pressure = document.querySelector(".pressure");
//     let description = document.querySelector(".description");
//     let humidity = document.querySelector(".humidity");
//     let speed = document.querySelector(".speed");
//     let deg = document.querySelector(".deg");
//     let img = document.querySelector(".weather_img");

//     city.innerHTML = data.name;
//     temperature.innerHTML = `Current temperature: ${data.main.temp} °C`;
//     pressure.innerHTML = `Pressure: ${data.main.pressure} Pa`;
//     data.weather.forEach((item) => {
//       description.innerHTML = `Description: ${item.description}`;
//     });
//     humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
//     speed.innerHTML = `Speed: ${data.wind.speed} Km/h`;
//     deg.innerHTML = `Deg: ${data.wind.deg}°`;
//     img.src = "https://openweathermap.org/img/w/04d.png";
//   });

// try {
//   fetch(
//     "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
//   )
//     .then((responce) => responce.json())
//     .then((data) => console.log(data));
// } catch (e) {
//   console.log(e);
// }
