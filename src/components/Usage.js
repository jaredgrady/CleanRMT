var React = require('react');

var Usage = React.createClass({
  render: function() {
    return (
        <div id="usage">
         <p>This tool creates a template for Smogon Rate My Team (RMT) Posts. Copy and paste the
            importable of your team into the entry box, select the options you want from the
            menus and click submit!
         </p>
        </div>
    );
  }
});

module.exports = Usage;
