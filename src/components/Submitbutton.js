var React = require('react');
var Resultbox = require('./Resultbox');
var handleTeam = require('../../public/js/index.js');

var Submitbutton = React.createClass({
  getInitialState: function() {
    return {content: 'Your RMT template will appear here!'};
  },

  handleClick: function() {
    var content = this.props.markdownContent;
    var options = {
      imgFormat: this.props.imageType,
      process: this.props.showProcess,
      processFormat: this.props.imageType,
      tfont: this.props.font,
      align: this.props.align,
      size: this.props.size,
      bold: this.props.bold,
      underlined: this.props.underlined,
      setFormat: 3,
      font: this.props.font
    };
    if (content === null) {
      alert('You must enter a team.');
    } else {
      content = handleTeam.rmt(content, options);
      this.setState({content: content});
    }
  },

  render: function() {
    return (
      <span>
       <Resultbox result={this.state.content}/>
       <button className='btn btn-primary submit-button' onClick={this.handleClick}>Submit</button>
     </span>
    );
  }
});

module.exports = Submitbutton;
