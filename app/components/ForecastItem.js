var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var utils = require('../utils/helpers');
var WeatherImage = require('./WeatherImage');

function ForecastItem(props) {
  return (  
    <Link to={props.city ? { pathname:'/details/' + props.city, state: props.forecast} : '#'} 
          className='forecast-item'
          onClick={props.onClick}>
      <WeatherImage pathSuffix={props.pathSuffix || ''} iconId={props.forecast.weather[0].icon}/>
      <h3>{`${props.forecast.temp.min} \u00B0C ~ ${props.forecast.temp.max} \u00B0C`}</h3>
      <h2>{utils.getDateDescription(props.forecast.dt)}</h2>
    </Link>
  )
}

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired
}

module.exports = ForecastItem;