
fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(response => response.json())
.then(data => {
    let city = document.querySelector(".city_name");
    let temperature = document.querySelector(".temp");
    let pressure = document.querySelector(".pressure");
    let description = document.querySelector(".description");
    let humidity = document.querySelector(".humidity");
    let speed = document.querySelector(".speed");
    let deg = document.querySelector(".deg");
    let img = document.querySelector(".weather_img");

    city.innerHTML = data.name;
    temperature.innerHTML = `Current temperature: ${data.main.temp} °C`;
    pressure.innerHTML = `Pressure: ${data.main.pressure} Pa`;
    data.weather.forEach(item => {
        description.innerHTML = `Description: ${item.description}`;
    });
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    speed.innerHTML = `Speed: ${data.wind.speed} Km/h`;
    deg.innerHTML = `Deg: ${data.wind.deg}°`;
    img.src = "http://openweathermap.org/img/w/04d.png";
});

fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(response => response.json())
.then(data => console.log(data))
