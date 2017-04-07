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
          done()
        }, 1001)

      });
      it('should stopped at 0', () => {
        var countdowncheck = TestUtils.renderIntoDocument(<Countdown/>);
        countdowncheck.handleSetCountdown(1);

        setTimeout(() => {
          expect(countdowncheck.state.count).toBe(0);
          done();
        }, 3001);
      });
      it('should pause countdown  on paused status', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleStatusChange('paused');

        setTimeout(() => {
          expect(countdown.state.count).toBe(3);
          expect(countdown.state.countDownStatus).toBe('paused');
          done();
        }, 1001);
        });
        it('should reset count on stopped', (done) => {
          var countdown = TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountdown(10);
          countdown.handleStatusChange('stopped');

          setTimeout(() => {
            expect(countdown.state.count).toBe(0);
            expect(countdown.state.countDownStatus).toBe('stopped');
            done();
          }, 1001);
          });
      })
});
