var React = require('react');
var Link = require('react-router-dom').Link;
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
      <div className='request-form'>
        <input className='form-control' 
               type="text" 
               placeholder='Tebet, Jakarta' 
               name='city'
               value={this.state.city} 
               onChange={this.handleChange}/>
        <Link className='btn btn-success'
              to={{
                pathname: '/forecast',
                search: '?city=' + this.state.city
              }}>
              Get Weather
        </Link>
      </div>
    )
  }
}

module.exports = WeatherRequestForm;