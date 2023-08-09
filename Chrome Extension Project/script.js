

const  API_key = '948f412be94a7a371bf2a146b349147e' 


window.onload = function () {
  var pos;
  var geo_loc = function (position) {
    pos = position 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=948f412be94a7a371bf2a146b349147e`)
    .then((data) => data.json())
    .then((jsonData) => {
      fetch(`https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
      .then((res) => res.blob())
      .then((result) => {
              document.getElementById("specific_location").innerHTML = jsonData.name
              document.getElementById("country_location").innerHTML = jsonData.sys.country
              document.getElementById("temp").innerHTML = Math.round(jsonData.main.temp)
              document.getElementById("text_feels").innerHTML = Math.round(jsonData.main.feels_like)
              document.getElementById("description").innerHTML = jsonData.weather[0].description
              const image_object_URL = URL.createObjectURL(result);
              document.getElementById("icon").src = image_object_URL
      })
    })
  };
  navigator.geolocation.getCurrentPosition(geo_loc);
}