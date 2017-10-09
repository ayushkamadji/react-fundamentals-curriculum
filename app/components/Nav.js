var React = require('react');
var WeatherRequestForm = require('./WeatherRequestForm');

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <h1 className='main-title'>Weather App</h1>
        <WeatherRequestForm />
      </div>
    )
  }
}

module.exports = Nav;