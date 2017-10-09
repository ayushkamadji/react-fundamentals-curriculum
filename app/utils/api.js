var axios = require('axios');
var API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe';

function handleError(error) {
  console.log(error);
}

function requestForecast(city) {
  var URI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${API_KEY}&cnt=5`);
  return axios.get(URI)
        .then(function(response) {
          return response;
        })
        .catch(handleError);
}

function requestCurrent(city) {
  var URI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${API_KEY}`);
  return axios.get(URI)
        .then(function(response) {
          return response.data;
        })
        .catch(handleError);
}

module.exports = {
  requestForecast: requestForecast,
  requestCurrent: requestCurrent
}