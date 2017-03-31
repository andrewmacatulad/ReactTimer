var React = require('react');

var Clock = React.createClass({
  // set Default Props for totalSeconds so you can use it outside of this jsx
  getDefaultProps: function(){
    totalSeconds: 0
  },
  // set the proptype of totalSeconds to number
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  // create a formatSeconds function with a parameter of totalSeconds
  // this will make seconds to be formated to 00:00
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    // this is done so instead of 22.2 seconds the .2 will be .02
    if(seconds < 10){
      seconds = '0' + seconds
    }
    // this is done so instead of 2.02 minutes the 2 will be 02.02
    if(minutes < 10){
      minutes = '0' + minutes
    }
    return minutes + ":" + seconds;

  },
  // render so you can display and use the props outside of this jsx
  // first you need to create a variable for the totalSeconds props
  // then you can now use the formatSeconds function and pass the totalSeconds with this code
  // {this.formatSeconds{totalSeconds}}
  render: function(){
    var {totalSeconds} = this.props
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
