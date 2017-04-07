var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass(
  {
  // Set the initial state of the count which is the timer and the countDownStatus to stopped so it will be in the default status
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  // this will update the props and the state
  // this will be changing the status of the controls
  // like stop/pause/start and set it in a case
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  // clear the timer when you switch pages so it will not run on the background
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  // this will set the timer so that it will add a 1 to the count every second
  startTimer: function(){
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);

  },
  // this is for the changing of the status of the timerStatus
  handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function(){
    var {count, timerStatus} = this.state;

    // the Clock totalSeconds will get the Clock which is the Circle with the seconds that is already formated
    // The Controls is for the buttons the countDownStatus props will be set to the timerStatus state
    // the onStatusChange is for the changing of the timerStatus if stopped/paused/started
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countDownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
      </div>
    )
  }
})

module.exports = Timer;
