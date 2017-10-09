var React = require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');
var api = require('../utils/api');

function ForecastGrid(props) {
  return (
    <div>
    </div>
  )
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      loading: true
    }
  }

  componentDidMount() {
    var query = queryString.parse(this.props.location.search);
    api.requestForecast(query.city)
        .then(function(data) {
          this.setState(function() {
            return {
              forecast: data,
              loading: false
            }
          });
          console.log(this.state.forecast);
        }.bind(this));
  }

  render() {
    return (
      <div className='container'>
        {this.state.loading && <div className='loading'>Loading forecast</div>}
      </div>
    )
  }
}

module.exports = Forecast;