var React = require('react');
var Clock = require('Clock')
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
  // Set the initial state count so it will not be null
  getInitialState: function(){
    return {count: 0};
  },
  // this is called when the form is submitted
  handleSetCountdown: function (seconds){
    // this state will interact with the countdownform
    // set the state to count
    this.setState({
      count: seconds
    })
  },
  render: function(){
    // now set the variable count to be the state
    var {count} = this.state
    return(
      // so you can use it here in the totalSeconds from the Clock pass the value to be the state
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
})

module.exports = Countdown;
