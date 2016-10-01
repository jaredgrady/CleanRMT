var React = require('react');
var Entrybox = require('./Entrybox').Entrybox;
var Imagemenu = require('./Imagemenu');

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
        <Imagemenu 
        content={this.state.content} 
        showProcess={this.props.showProcess} 
        font={this.props.font}
        align={this.props.align}
        size={this.props.size} 
        />
       </span>
      </div>
    );
  },

  _onContentChange: function(_content) {
    this.setState({content: _content});
  }
});

module.exports = Editor;
