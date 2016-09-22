var React = require('react');
var Entrybox = require('./entrybox').Entrybox;
var Submitbutton = require('./submitbutton');
var Imagemenu = require('./imagemenu');

var Editor = React.createClass({
  getInitialState: function() {
    return {
      content: null
    };
  },

  render: function() {
    return (
      <div className="editor">
       <Entrybox initialContent="" iconsSet="font-awesome" onContentChange={this._onContentChange}/>
       <span id ="result-box-area">
        <Submitbutton markdownContent={this.state.content}/>
        <Imagemenu />
       </span>
      </div>
    );
  },

  _onContentChange: function(_content) {
    this.setState({content: _content});
  }
});

module.exports = Editor;
