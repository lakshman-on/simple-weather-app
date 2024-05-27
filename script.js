const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const apiKey = "Enter your openweathermap API here";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/Hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

//Below is optimized code by ChatGPT

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// const errorElement = document.querySelector(".error");
// const weatherElement = document.querySelector(".weather");

// const weatherImages = {
//   Clouds: "clouds.png",
//   Clear: "clear.png",
//   Rain: "rain.png",
//   Drizzle: "drizzle.png",
//   Mist: "mist.png",
// };

// async function checkWeather(city) {
//   const apiKey = "7102a97df1d443c015d74bb960e9e0b9";
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     const data = await response.json();

//     const { name, main, weather, wind } = data;
//     const { temp, humidity } = main;

//     displayWeather(name, temp, humidity, wind.speed, weather[0].main);
//   } catch (error) {
//     displayError();
//   }
// }

// function displayWeather(city, temp, humidity, windSpeed, weatherMain) {
//   document.querySelector(".city").innerHTML = city;
//   document.querySelector(".temp").innerHTML = Math.round(temp) + "°C";
//   document.querySelector(".humidity").innerHTML = humidity + "%";
//   document.querySelector(".wind").innerHTML = windSpeed + " km/Hr";

//   const weatherImage = weatherImages[weatherMain];
//   if (weatherImage) {
//     weatherIcon.src = "images/" + weatherImage;
//   }

//   weatherElement.style.display = "block";
//   errorElement.style.display = "none";
// }

// function displayError() {
//   errorElement.style.display = "block";
//   weatherElement.style.display = "none";
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });
