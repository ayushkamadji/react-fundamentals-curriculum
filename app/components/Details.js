var React = require('react');
var ForecastItem = require('./ForecastItem');
var WeatherImage = require('./WeatherImage');

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.location.state;
  }

  render() {
    return (
      <div className='detail-container'>
        <ForecastItem forecast={this.state} pathSuffix='../' onClick={function(e){ e.preventDefault()}} />
        <div className='city-heading'>{this.props.match.params.city}</div>
        <h4>{this.state.weather[0].description}</h4>
        <ul>
          <li>Day: {`${this.state.temp.day} \u00B0C`}</li>
          <li>Night: {`${this.state.temp.night} \u00B0C`}</li>
          <li>Humidity: {this.state.humidity}</li>
        </ul>
      </div>
    )
  }
}

module.exports = Details;