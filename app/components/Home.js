var React = require('react');
var WeatherRequestForm = require('./WeatherRequestForm');

class Home extends React.Component {
  render() {
    return (
      <div className='container background-container' style={ {backgroundImage: "url('app/images/pattern.svg')"} }>
        <h3 className="large-form-title">Enter a City and State</h3>
        <WeatherRequestForm />
      </div>
    )
  }
}

module.exports = Home;