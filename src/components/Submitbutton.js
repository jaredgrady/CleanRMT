var React = require('react');
var Resultbox = require('./resultbox');
var handleTeam = require('../../public/js/index.js');

var Submitbutton = React.createClass({
  getInitialState: function() {
    return {content: 'Your RMT template will appear here!'};
  },

  handleClick: function() {
    var content = this.props.markdownContent;
    var imageType = this.props.imageType;
    var templateType = this.props.templateType;
    if (content === null) {
      alert('You must enter a team.');
    } else {          //To-do: Add image changing support
      content = handleTeam.importTeam(content, imageType, templateType);
      this.setState({content: content});
    }
  },

  render: function() {
    return (
      <span>
       <Resultbox result={this.state.content}/>
       <button className='btn btn-success submit-button' onClick={this.handleClick}>Submit</button>
     </span>
    );
  }
});

module.exports = Submitbutton;
