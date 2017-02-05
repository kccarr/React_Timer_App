var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Timer = require('Timer');


describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('timer starting state at paused', (done) => {
      it('starting state should be paused and be 0', () => {
        var timerStart = TestUtils.renderIntoDocument(<Timer/>);
        timerStart.handleTimerClock();

        expect(timerStart.state.timerStatus).toBe('paused');
        expect(timerStart.state.count).toBe(0);

        });
    });

    // test is not working for some reason

    describe('timer works after starting', (done) => {
      it('should return 5 seconds 5 seconds later after timer started', () => {
        var timerStart = TestUtils.renderIntoDocument(<Timer/>);
        timerStart.handleStatusChange('started');
        expect(timerStart.state.count).toBe(0);

        setTimeout(() => {
          expect(timerStart.state.timerStatus).toBe('started');
          expect(timerStart.state.count).toBe(1);
          done();
        }, 1001)
      });
  });

  describe('timer pauses and stops after state changed to paused or to stopped by button click', (done) => {
    it('should pause after timer is paused', () => {
      var timerStart = TestUtils.renderIntoDocument(<Timer/>);
      timerStart.setState({count: 10});
      timerStart.handleStatusChange('started');
      timerStart.handleStatusChange('paused');

      setTimeout(() => {
        expect(timerStart.state.timerStatus).toBe('paused');
        expect(timerStart.state.count).toBe(10);
        done();
      }, 1001)
    });

    it('should clear after timer is cleared', () => {
      var timerStart = TestUtils.renderIntoDocument(<Timer/>);
      timerStart.setState({count: 10});
      timerStart.handleStatusChange('started');
      timerStart.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timerStart.state.timerStatus).toBe('stopped');
        expect(timerStart.state.count).toBe(0);
        done();
      }, 1001)
    });
});


});

// describe('Countdown', () => {
//   it('should exist', () => {
//     expect(Countdown).toExist();
//   });
//
//   describe('handleSetCountdown', (done)  => {
//     it('should set state to started and countdown', () => {
//       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
//       countdown.handleSetCountdown(10);
//
//       expect(countdown.state.count).toBe(10);
//       expect(countdown.state.countdownStatus).toBe('started');
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(9);
//         done();
//       }, 1001)
//     });
//   });
//
//   describe('Countdown does not yield negative numbers', (done) => {
//     it('no negative numbers', () => {
//       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
//       countdown.handleSetCountdown(1);
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(0);
//         done();
//       }, 3001);
//     });
//
//     it('should pause countdown on paused status', () => {
//       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
//       countdown.handleSetCountdown(3);
//       countdown.handleStatusChange('paused');
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(3);
//         expect(countdown.state.countdownStatus).toBe('paused');
//         done();
//       }, 1001);
//     });
//
//     it('should clear countdown on stopped status', () => {
//       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
//       countdown.handleSetCountdown(47);
//       countdown.handleStatusChange('stopped');
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(0);
//         expect(countdown.stat.countdownStatus).toBe('stopped');
//         done();
//       }, 1001);
//
//     });
//
//     it('should reduce seconds countdown on started status', () => {
//       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
//       countdown.handleSetCountdown(47);
//       countdown.handleStatusChange('started');
//
//       setTimeout(() => {
//         expect(countdown.state.count).toBe(44);
//         expect(countdown.stat.countdownStatus).toBe('started');
//         done();
//       }, 3001);
//
//     });
//
//   });
// });
