var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

// The describe will be seen in the command prompt and this is where you name your test
// the it will also be seen in the command prompt and this is the description of the test
// expect is the test
// this test will make sure the clock.jsx exist
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

// this will test/render and check the clock value and props
// the TestUtils.renderIntoDocument is used to get the values in the Clock.jsx
// and <Clock totalSeconds={63} is getting the totalSeconds props and set the value to 63
// then get use REactDOM.findDomNode which is use to convert the component to the actual html that is rendered to the browser
// then set actualText to pull the text inside the .clock-text class in the clock.jsx
// now you can test if the actualText which you set is equal to 01:03
  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={'63'}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe("01:03")
    })
  })

// this will test if the formatseconds works
// the things done in the test above applies most here
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 600;
      var expected = '10:00';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    // this will test if you have less than 10 number which will be error so you need to adjust things on clock.jsx
    // the things done in the test above applies most here

      it('should format seconds when min/sec less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
      });
  });



});
