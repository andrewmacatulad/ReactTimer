var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
      expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
      it('should set state to started and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(20);

        expect(countdown.state.count).toBe(20);
        expect(countdown.state.countDownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(19);
          done();
        }, 1001)
      })
    })

    describe('check if negative', () => {
      it('should stopped at 0', () => {
        var countdowncheck = TestUtils.renderIntoDocument(<Countdown/>);
        countdowncheck.handleSetCountdown(1);

        setTimeout(() => {
          expect(countdowncheck.state.count).toBe(0);
          done();
        }, 3001)

      })
    })
});
