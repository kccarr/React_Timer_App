var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      // var hour = 0,
      //     minutes = 0,
      //     seconds = 0;
      // if (strSeconds > 3599) {
      //   hour += (strSeconds - (strSeconds % 3600)) /3600;
      //   strSeconds = strSeconds % 3600;
      // }
      // else if (strSeconds > 59) {
      //   minutes += (strSeconds - (strSeconds % 60)) /60;
      //   strSeconds = strSeconds % 60;
      // }
      // else {
      //   seconds += strSeconds;
      // }
      //
      // var finalStrSecs = `${hour}:${minutes}:${seconds}`;

      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
