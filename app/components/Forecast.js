var React = require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helpers');

function ForecastItem(props) {
  return (  
    <div className='forecast-item'>
      <img src={'app/images/weather-icons/' + props.forecast.weather[0].icon + '.svg'}></img>
      <h3>{`${props.forecast.temp.min} \u00B0C ~ ${props.forecast.temp.max} \u00B0C`}</h3>
      <h2>{utils.getDateDescription(props.forecast.dt)}</h2>
    </div>
  )
}

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired
}

function ForecastsGrid(props) {
  return (
    <div className='forecast-grid'>
      {props.forecasts.list.map(function(forecast) {
        return <ForecastItem key={forecast.dt} forecast={forecast}/>
      })}
    </div>
  )
}

ForecastsGrid.propTypes = {
  forecasts: PropTypes.object.isRequired
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      forecasts: null,
      loading: true
    }
  }

  componentDidMount() {
    var city = queryString.parse(this.props.location.search).city;
    api.requestForecast(city)
        .then(function(data) {
          this.setState(function() {
            return {
              city: city,
              forecasts: data,
              loading: false
            }
          });
        }.bind(this));
  }

  render() {
    return (
      <div className='container'>
        {this.state.loading && <div className='loading'>Loading forecast</div>}
        {this.state.forecasts && <h1 className='city-title'>{this.state.city}</h1>}
        {this.state.forecasts && <ForecastsGrid forecasts={this.state.forecasts} />}
      </div>
    )
  }
}

module.exports = Forecast;