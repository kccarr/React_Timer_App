var React = require('react');
var ReactDOM = require('react-dom');
// destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// same as the below for line 3
// var Route = require('react-router').Route;
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      
    </Route>
  </Router>,
  document.getElementById('app')
);
