var React = require('react');

// First Set CountdownForm
// set onSubmit function that you will use on the form below

var CountdownForm = React.createClass({
  onSubmit: function(e){
    // always use preventDefault because this prevents the full browser refresh
    e.preventDefault();
    // to get and set the refs value set it in a variable
    var strSeconds = this.refs.seconds.value;
    // this if function will make sure that it only accepts numbers
    // .match expect regular expression it starts and ends with /
    // the * is use so it will not use only one but multiple so it can use 0-9 as many times the user wants
    // the ^ will tell the regular expression to match and ends the character that is either 0-9
    // and the $ this will tell regular expression to match the begginning and ends
    if (strSeconds.match(/^[0-9]*$/)) {
      // then now you can set the refs value to reset it
      this.refs.seconds.value = '';
      // the 10 is equals to base so 0-9 is covered
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function(){

// Set the form and ref='form' set the onsubmit and set it to be the function onSubmit and set countdownForm
// now set the input ref to seconds
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in Seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
