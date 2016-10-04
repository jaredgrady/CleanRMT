var React = require('react');
var Options = require('./Options');

var Generator = React.createClass({

  getInitialState: function() {
    return {
      display: 'none'
    };
  },

  render: function() {
    return (
     <div>
      <Options />
     </div>
    );
  }
});

module.exports = Generator;
