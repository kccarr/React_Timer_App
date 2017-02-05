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
      } else {
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
