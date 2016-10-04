var React = require('react');

var NavBar = React.createClass({
  render: function () {
    return (
        <div className="header">
         <ul className="header">
          <li className="header-left"><a href="/">Home</a></li>
          <li className="header-left"><a href="http://www.smogon.com/forums/forums/rate-my-team.52/" target='_blank'>RMT Forum</a></li>
          <li className="header-left"><a href="https://github.com/TheFenderStory/rmt-template" target='_blank'>GitHub</a></li>
          <li className="header-right"><a className="active" href="https://github.com/TheFenderStory/rmt-template/blob/master/README.md" target='_blank'>About</a></li>
         </ul>
        </div>
    );
  }
});

module.exports = NavBar;
