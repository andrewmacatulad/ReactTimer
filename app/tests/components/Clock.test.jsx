var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={63}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      var expected = '01:03';
      expect(actualText).toBe(expected)
    })
  })
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 600;
      var expected = '10:00';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });

  it('should format seconds when min/sec less than 10', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 61;
    var expected = '01:01';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

});
