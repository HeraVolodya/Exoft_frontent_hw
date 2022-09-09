let weather = {
    fetchWeather: function (city) {
      fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ 
        city +"?unitGroup=metric&key=9ZJWDBY844ZVA5XZSRXM9K3BY&contentType=json"
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found."); 
          }
          if(city == "Mosckow"){
            alert("Здохний йобана русня");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      let daynow = new Date();
      const { address } = data;
      const {resolvedAddress} = data;
      const {datetime} = data.days[0];
      const {temp} = data.days[4];
      const {feelslike} = data.days[7];
      const {humidity} = data.days[9];
      const {visibility} = data.days[11];
      const {pressure} = data.days[7];
      const day = daynow.getDay();


      document.querySelector(".wather__content_info-cyty__name").innerText = "Weather in " + address;
      document.querySelector(".wather__content_info-cyty__name_region").innerText = "Region " + resolvedAddress;
      document.querySelector(".wather__content_info-cyty__name_region").innerText = "Data " + datetime;
      document.querySelector(".wather__content_info-temperature_celsius").innerText = "Temperature " + temp + " °C";
      document.querySelector(".wather__content_info-temperature_feld").innerText = "Feels like " + feelslike + " °C";
      document.querySelector(".wather__content_info-data_humidity").innerText = "Humidity " + humidity + " %";
      document.querySelector(".wather__content_info-data_visibility").innerText = "Visibility " + visibility;
      document.querySelector(".wather__content_info-data_pressure").innerText = "Pressure " + pressure + " m.c.";
      document.querySelector(".wather__content_info-data_day").innerText = "Day of week" + day;
    },
    search: function () {
      this.fetchWeather(document.querySelector(".searchbar").value);
    },
  };
  
  document.querySelector(".searchbutton").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".searchbar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  

