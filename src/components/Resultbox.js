var React = require('react');

var Resultbox = React.createClass({
  render: function() {
    return (
      <div>
       <textarea className="result-box" readOnly placeholder="Your RMT template will appear here!" value={this.props.result}></textarea>
      </div>
    );
  }
});

module.exports = Resultbox;
