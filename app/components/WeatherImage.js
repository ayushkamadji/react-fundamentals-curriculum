var React = require('react');
var PropTypes = require('prop-types');

function WeatherImage(props) {
  return (  
      <img src={ props.pathSuffix + '/app/images/weather-icons/' + props.iconId + '.svg'}></img>
  )
}

WeatherImage.propTypes = {
  iconId: PropTypes.string.isRequired
}

module.exports = WeatherImage;