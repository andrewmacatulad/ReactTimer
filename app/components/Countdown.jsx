var React = require('react');
var Clock = require('Clock')
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
  // Set the initial state count so it will not be null
  getInitialState: function(){
    return {
    count: 0,
    // add a new state countDownStatus it has 3 status that is started/pause/stopped
    countDownStatus: 'stopped'
  };

  },
  // this is a lifecycle component this is called when the props and state is updated
  // in this case only the state
  // this will be called if the countdownstatus is started
  // the prevState is equal to stopped
  componentDidUpdate: function(prevProps, prevState) {
    // the this.state.countdownstatus is equal to the handleSetCountdown countdownstatus property which is started
    // and the prevstate.countdownstatus is stopped if they are not equal you can run the switch statement
    if(this.state.countDownStatus !== prevState.countDownStatus) {
      // since the this.state.countdownstatus is equal to started the started case will start
      switch (this.state.countDownStatus) {
        case 'started':
        // then now you can call the startTimer function
          this.startTimer();
          break;
      }
    }
  },
  // this will set an interval and how fast is it
  startTimer: function(){
    // this will set the interval
    this.timer = setInterval(() => {
      // this will be triggered every interval
      // set the newCount as the state.count but -1 per tick/triggered
      var newCount = this.state.count - 1;
      // this will end the newCount if it reaches 0 so you will not have a negative value
      this.setState({
        // this have the ternary operator so the statement is
        // if newCount is greater than or equal to 0 it will still continue but if it fails the newCount value will be 0
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds){
    this.setState({
      count: seconds,
      // set the countdownstatus to started when you enter a number nad start it
      countDownStatus: 'started'
    })
  },
  render: function(){
    var {count} = this.state
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
})

module.exports = Countdown;
