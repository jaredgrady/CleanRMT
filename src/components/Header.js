var React = require('react');
var Header = React.createClass({

  getInitialState: function() {
    return {
      display: 'none'
    };
  },

  render: function() {
    return (
     <div className = "jumbotron" >
      <h1><center>CleanRMT</center></h1>
     </div>
    );
  }
});

module.exports = Header;
