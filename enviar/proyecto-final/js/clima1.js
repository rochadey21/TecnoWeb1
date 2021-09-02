
let weather = {
    apiKey: "c056177cbc90c39086389a0b3ed68926",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".ciudad").innerText = "Clima en el Departamento de Villa Tunari";
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humedad").innerText =
        "Humedad: " + humidity + "%";
      document.querySelector(".viento").innerText =
        "Velocidad del viento: " + speed + " km/h";
      document.querySelector(".clima").classList.remove("loading");
      
    }
  };
  
 

  
  weather.fetchWeather("3920736");