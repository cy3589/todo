const API_KEY = "bcb4b7ad417816e0dde9d1ba5b760745";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = data.main.temp + "도";
      });
  },
  () => {
    alert("Can't find you. No weather for you");
  }
);
