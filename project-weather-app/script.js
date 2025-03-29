let apiKey = "cb97c40f483b432d0d5f53b1643e6565";

async function fetchWeather(city) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  );
  const weatherData = await response.json();
  displayWeather(weatherData);
}

function displayWeather(weatherData) {
  const name = weatherData.name;
  const icon = weatherData.weather[0].icon;
  const description = weatherData.weather[0].main;
  const temp = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const speed = weatherData.wind.speed;

  document.querySelector(".city-name").innerText = "Weather at " + name;
  document.querySelector(".temp").innerText = temp + " °C";
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".humidity").innerText = "Humidity:" + humidity + " %";
  document.querySelector(".wind").innerText = "Wind Speed:" + speed + " km/hr";
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const cityName = document.getElementById("search").value;
  fetchWeather(cityName);
});

document.getElementById("search").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    fetchWeather(e.target.value);
  }
});

fetchWeather("Delhi");
