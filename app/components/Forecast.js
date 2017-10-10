var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var ForecastItem = require('./ForecastItem');
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helpers');

function ForecastsGrid(props) {
  return (
    <div className='forecast-grid'>
      {props.forecasts.list.map(function(forecast) {
        return <ForecastItem key={forecast.dt} city={props.city} forecast={forecast}/>
      })}
    </div>
  )
}

ForecastsGrid.propTypes = {
  city: PropTypes.string.isRequired,
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

    this.requestAndUpdate = this.requestAndUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    var city = queryString.parse(nextProps.location.search).city;
    this.requestAndUpdate(city);
  }

  componentDidMount() {
    var city = queryString.parse(this.props.location.search).city;
    this.requestAndUpdate(city);
  }

  requestAndUpdate(city) {
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
        {this.state.forecasts && <ForecastsGrid city={this.state.city} forecasts={this.state.forecasts} />}
      </div>
    )
  }
}

module.exports = Forecast;