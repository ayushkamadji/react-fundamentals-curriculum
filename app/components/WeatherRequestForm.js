var React = require('react');

class WeatherRequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var newValue = event.target.value;
    this.setState(function() {
      return {
        city: newValue
      }
    })
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
        <button className='btn btn-success' type="submit">Get Weather</button>
      </form>
    )
  }
}

module.exports = WeatherRequestForm;