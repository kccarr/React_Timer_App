var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock');
var TimerControl = require('TimerControl');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },

  componentDidUpdate: function(prevProps, prevState){
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startClock();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.clock);
          break;
      }
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.clock);
    this.clock = undefined;
  },

  startClock: function() {
    this.clock = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({count: newCount});

    }, 1000);
  },

  handleTimerClock: function() {
    this.setState({
      timerStatus: 'paused'
    });
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },

  render: function() {
    var {count, timerStatus} = this.state;
    
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <TimerControl timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
      </div>
    );
  }
});

module.exports = Timer;
