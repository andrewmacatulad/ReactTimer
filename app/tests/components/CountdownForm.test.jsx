var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');
// check first if you can access the countdownform.jsx and if exist
describe('CountdownForm', () => {
  it('WAAAAAAAAAAAAA', () => {
    expect(CountdownForm).toExist();
  });
  // this will test if valid seconds are entered
  it('should call onSetCountdown if valid seconds entered', () => {
    // set a spy by using this
    var spy = expect.createSpy();
    // set the onCountdown to a jsx expression you only need to pass in the spy variable
    // you can check if the form is submitted with this spy
    // then you set the jquery
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    // set the refs value
    countdownForm.refs.seconds.value = '108';
    // and you can simulate the submit with this.
    // you can get the data from the from with jquery and accss the form selector
    TestUtils.Simulate.submit($el.find('form')[0]);
    // now you can use the expect to check if it has been called
    expect(spy).toHaveBeenCalledWith(108);
  })

  it('should not call onSetCountdown if valid seconds entered', () => {
    // set a spy by using this
    var spy = expect.createSpy();

    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '108b';

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
})
