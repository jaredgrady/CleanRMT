var React = require('react');
var Resultbox = require('./resultbox');

var Submitbutton = React.createClass({
  getInitialState: function() {
    return {content: 'Your RMT template will appear here!'};
  },

  handleClick: function() {
    var content = this.props.markdownContent;
    if (content === null) {
      alert('You must enter a team.');
    } else {
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
