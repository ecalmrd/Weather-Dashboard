//Variables
var userForm = $('#city-form') // left column area 

var searchButton = $('button') // add event listenter, set local storage
var weatherContainer = document.querySelector('#current-weather-container');
var forecastContainer = document.querySelector('#forecast-container');
var previousCitiesContainer = document.querySelector('#previous-cities');
var APIkey = "a202f8f680d642694eea46e96ad50d30";

var renderCurrentForecast = (data) => {
  weatherContainer.textContent = ""
  var cityName = document.createElement('h3');
  var temp = document.createElement('h3');
  var windSpeed = document.createElement('h3');
  var humidity = document.createElement('h3');
  var weatherCondition = document.createElement('h3');
  var logCity = document.createElement('button');
  
  cityName.textContent = data.city.name;
  temp.textContent = data.list[0].main.temp;
  windSpeed.textContent = data.list[0].wind.speed;
  humidity.textContent = data.list[0].main.humidity;
  weatherCondition.textContent = data.list[0].weather[0].description;
  logCity.textContent = data.city.name;

  weatherContainer.appendChild(cityName); 
  cityName.append(temp);
  cityName.append(windSpeed);
  cityName.append(humidity);
  cityName.append(weatherCondition);

  previousCitiesContainer.appendChild(logCity);
  // previousCitiesContainer.addClass('logCityContainer');
  // previousCitiesContainer.on('click', function() {
  //   localStorage.getItem(value);

  // });

};

var renderFiveDayForecast = (data) => {
  for (var i=0; i <data.list.length; i=i+8) {
    console.log (data.list[i])
  
    var fiveDayCityName = document.createElement('h3');
    var fiveDayTemp = document.createElement('h3');
    var fiveDaywindSpeed = document.createElement('h3');
    var fiveDayhumidity = document.createElement('h3');
    var fiveDayweatherCondition = document.createElement('h3');

    fiveDayCityName.textContent = data.city.name;
    fiveDayTemp.textContent = data.list[i].main.temp;
    fiveDaywindSpeed.textContent = data.list[i].wind.speed;
    fiveDayhumidity.textContent = data.list[i].main.humidity;
    fiveDayweatherCondition.textContent = data.list[i].weather[0].description;

    forecastContainer.appendChild(fiveDayCityName);
    fiveDayCityName.append(fiveDayTemp); 
    fiveDayCityName.append(fiveDaywindSpeed);
    fiveDayCityName.append(fiveDayhumidity);
    fiveDayCityName.append(fiveDayweatherCondition);
  }

};
//local storage code
searchButton.on('click', function (event) {
  event.preventDefault();
  var city = document.getElementById('city-input');
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&units=imperial&appid=" + APIkey;
  var key = $(this).parent().attr('id');
  var value = $(this).siblings('input').val();
  localStorage.setItem(key, value);
  fetch(queryURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      renderCurrentForecast(data)
      renderFiveDayForecast(data)
    })
});



