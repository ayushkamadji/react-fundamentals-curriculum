var React = require('react');

class WeatherRequestForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text"/>
        <button type="submit">Get Weather</button>
      </form>
    )
  }
}

module.exports = WeatherRequestForm;