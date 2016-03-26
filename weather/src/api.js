var _ = require('lodash');

const OPEN_WEATHER_API_KEY = 'e8436a6e7b06d6872f8e593fac92e267';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + OPEN_WEATHER_API_KEY;

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
};

module.exports = function(latitude, longitude) {
  var url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(response => response.json())
    .then (json => ({
      city: json.name,
      temperature: kelvinToF(json.main.temp),
      description: _.capitalize(json.weather[0].description)
    }));
}
