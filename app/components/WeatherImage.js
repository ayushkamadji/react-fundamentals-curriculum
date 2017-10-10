var React = require('react');
var PropTypes = require('prop-types');

function WeatherImage(props) {
  var image = require(`images/weather-icons/${props.iconId}.svg`);
  return (  
      <img src={`/${image}`}></img>
  )
}

WeatherImage.propTypes = {
  iconId: PropTypes.string.isRequired,
}

module.exports = WeatherImage;