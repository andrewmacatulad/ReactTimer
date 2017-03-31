var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
// Object destructuring this will make Route,Router,IndexRoute,hashHistory will be set to react-router
var { Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown')
var Navigation = require('Navigation')
var Timer = require('Timer')
// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')

var RoutingFunc = React.createClass({
  render: function(){
    //Basic Router setup
    // Router component need to know the tracking component
    // If the link is in root or / it will show the Main component
    // And you can add /nav or anything then set the component you want to show,
    return(
      <Router history={hashHistory}>

        <Route path="/" component = {Main}>
          <Route path="/Countdown" component = {Countdown}/>
          <IndexRoute component = {Timer}/>
        </Route>
        <Route path="/Navigation" component = {Navigation}></Route>
      </Router>
    )
  }
})

ReactDOM.render(

  <RoutingFunc/>,
  document.getElementById('myBtn')
)

// function handleSelect(selectedKey) {
//   alert('selected ' + selectedKey);
// }
// var MyReactBootstrapButton = React.createClass({
// render: function() {
//
//     var Nav = ReactBootstrap.Nav,
//         NavItem  = ReactBootstrap.NavItem;
//
//     return (  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
//     <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
//     <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
//     <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
//   </Nav>);
// }
// });
//
//
// ReactDOM.render(
//   <MyReactBootstrapButton/>,
//   document.getElementById("myBtn")
// );
