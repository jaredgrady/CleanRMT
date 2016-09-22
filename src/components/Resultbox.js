var React = require('react');

var Resultbox = React.createClass({
  render: function() {
    return (
      <div id="result-box-area">
       <textarea className="result-box" readOnly placeholder="Your RMT template will appear here!" value={this.props.result}></textarea>
      </div>
    );
  }
});

module.exports = Resultbox;
