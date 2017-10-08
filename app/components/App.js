var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    )
  }
}

module.exports = App;