var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var actualText = $el.find('.rendered').text();
      expect(actualText).toBe('Pause');

    });
  });

});
