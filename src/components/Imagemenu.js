var React = require('react');
var Submitbutton = require('./submitbutton');

var Imagemenu = React.createClass({
  getInitialState: function() {
    return {
      display: 'dropdown-content',
      imageType: 'icons'
    };
  },

  handleClick: function() {
    if (this.state.display === 'dropdown-content') {
      this.setState({display: 'dropdown-content show'});
    } else {
      this.setState({display: 'dropdown-content'});
    }
  },

  chooseImageType: function(type) {
    this.setState({
      imageType: type,
      display: 'dropdown-content'
    });
  },

  render: function () {
    return (
     <div>
     <Submitbutton markdownContent={this.props.content} imageType={this.state.imageType} templateType={this.props.templateType}/>
      <span className="dropdown">
       <button onClick={this.handleClick} className ='btn btn-success dropbtn'>Image Type: {this.state.imageType}</button>
        <div id="myDropdown" className={this.state.display}>
           <span onClick={()=>this.chooseImageType('icons')}>Icon</span>
           <span onClick={()=>this.chooseImageType('shuffle')}>Shuffle</span>
           <span onClick={()=>this.chooseImageType('pokesho')}>Pokesho</span>
           <span onClick={()=>this.chooseImageType('xyanimated')}>XY animated</span>
           <span onClick={()=>this.chooseImageType('xy')}>XY</span>
           <span onClick={()=>this.chooseImageType('smd')}>Mystery Dungeon</span>
          </div>
      </span>
     </div>
    );
  }
});

module.exports = Imagemenu;
