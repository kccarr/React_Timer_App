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

  describe('handleSetCountdown', (done)  => {
    it('should set state to started and countdown', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });
  });

  describe('Countdown does not yield negative numbers', (done) => {
    it('no negative numbers', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause countdown on paused status', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should clear countdown on stopped status', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(47);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.stat.countdownStatus).toBe('stopped');
        done();
      }, 1001);

    });

    it('should reduce seconds countdown on started status', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(47);
      countdown.handleStatusChange('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(44);
        expect(countdown.stat.countdownStatus).toBe('started');
        done();
      }, 3001);

    });

  });
});

//
// describe('CountdownForm', () => {
//   it('should exist', () => {
//     expect(CountdownForm).toExist();
//   });
//
//   it('should call onSetCountdown if valid seconds entered', () => {
//     var spy = expect.createSpy();
//     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
//     var $el = $(ReactDOM.findDOMNode(countdownForm));
//
//     countdownForm.refs.seconds.value = '109';
//     TestUtils.Simulate.submit($el.find('form')[0]);
//
//     expect(spy).toHaveBeenCalled(109);
//   });
//
//   it('should not call onSetCountdown if invalid seconds entered', () => {
//     var spy = expect.createSpy();
//     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
//     var $el = $(ReactDOM.findDOMNode(countdownForm));
//
//     countdownForm.refs.seconds.value = '#';
//     TestUtils.Simulate.submit($el.find('form')[0]);
//
//     expect(spy).toNotHaveBeenCalled('#');
//   });
// });
