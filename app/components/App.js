var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home}/>
          <Route path='/forecast' component={Forecast} />
        </div>
      </Router>
    )
  }
}

module.exports = App;