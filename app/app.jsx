var React = require('react');
var ReactDOM = require('react-dom');
// destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// same as the below for line 3
// var Route = require('react-router').Route;
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
