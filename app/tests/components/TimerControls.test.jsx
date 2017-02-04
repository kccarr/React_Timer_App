var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TimerControl = require('TimerControl');

describe('TimerControls', () => {
  it('should exists', () => {
    expect(TimerControl).toExist();
  });

  describe('render and test if current working', () => {
    it('test pause button', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControl timerStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    });
  });
});
