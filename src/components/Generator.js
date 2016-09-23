var React = require('react');
var Templatetype = require('./templatetype');

var Generator = React.createClass({

  getInitialState: function() {
    return {
      display: 'none'
    };
  },

  render: function() {
    return (
     <div>
      <Templatetype />
     </div>
    );
  }
});

module.exports = Generator;
