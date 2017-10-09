var React = require('react');
var api = require('../utils/api');

class WeatherRequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    var newValue = event.target.value;
    this.setState(function() {
      return {
        city: newValue
      }
    })
  }

  handleClick(event) {
    event.preventDefault();
    api.requestForecast(this.state.city)
        .then(function(data) {
          console.log(data);
        }.bind(this));
  }

  render() {
    return (
      <form className='request-form'>
        <input className='form-control' 
               type="text" 
               placeholder='Tebet, Jakarta' 
               name='city'
               value={this.state.city} 
               onChange={this.handleChange}/>
        <button className='btn btn-success' onClick={this.handleClick}>Get Weather</button>
      </form>
    )
  }
}

module.exports = WeatherRequestForm;