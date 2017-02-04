var React = require('react');

var TimerControl = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function() {
    var {timerStatus} = this.props;
    var renderStartStopButton = () => {
      if(timerStatus === 'started') {
        return <button className="button primary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (timerStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    return (
      <div className="timerControls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = TimerControl;

// var React = require('react');
//
// var Controls = React.createClass({
//   propTypes: {
//     countdownStatus: React.PropTypes.string.isRequired,
//     onStatusChange: React.PropTypes.func.isRequired
//   },
//   onStatusChange: function(newStatus) {
//     return () => {
//       this.props.onStatusChange(newStatus);
//     }
//   },
  // render: function() {
  //   var {countdownStatus} = this.props;
  //   var renderStartStopButton = () => {
  //     if (countdownStatus === 'started') {
  //       // onClick is using a currying pattern
  //       // to use a function to return a different function
  //       return <button className="button secondary" onClick={this.onStatusChange('paused')}><span className="rendered">Pause</span></button>
  //     } else if (countdownStatus === 'paused') {
  //       return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
  //     }
  //   };
  //   return (
  //     <div className="controls">
  //       {renderStartStopButton()}
  //       <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
  //     </div>
  //   );
  // }
// });
//
// module.exports = Controls;
