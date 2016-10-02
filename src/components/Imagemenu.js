var React = require('react');
var Submitbutton = require('./Submitbutton');

var Imagemenu = React.createClass({
  getInitialState: function() {
    return {
      display: 'dropdown-content',
      boldMenu: 'dropdown-content',
      underlineMenu: 'dropdown-content',
      imageType: 'icons',
      bold: false,
      underlined: false
    };
  },

  handleClick: function() {
    if (this.state.display === 'dropdown-content') {
      this.setState({display: 'dropdown-content show lower-button'});
    } else {
      this.setState({display: 'dropdown-content'});
    }
  },

  handleClickboldMenu: function() {
    if (this.state.boldMenu === 'dropdown-content') {
      this.setState({boldMenu: 'dropdown-content show lower-button'});
    } else {
      this.setState({boldMenu: 'dropdown-content'});
    }
  },

  handleClickunderlineMenu: function() {
    if (this.state.underlineMenu === 'dropdown-content') {
      this.setState({underlineMenu: 'dropdown-content show lower-button'});
    } else {
      this.setState({underlineMenu: 'dropdown-content'});
    }
  },

  chooseImageType: function(type) {
    this.setState({
      imageType: type,
      display: 'dropdown-content'
    });
  },

  setBold: function(bool) {
    this.setState({
      bold: bool,
      boldMenu: 'dropdown-content'
    });
  },

  setUnder: function(bool) {
    this.setState({
      underlined: bool,
      underlineMenu: 'dropdown-content'
    });
  },

  render: function () {
    return (
     <div>
     <Submitbutton
     markdownContent={this.props.content}
     imageType={this.state.imageType}
     font={this.props.font}
     align={this.props.align}
     showProcess={this.props.showProcess}
     bold={this.state.bold}
     underlined={this.state.underlined}
     size={this.props.size}
     />
      <span className="dropdown">
       <button onClick={this.handleClick} className ='btn btn-success dropbtn'>Image Type: {this.state.imageType}</button>
       <div className={this.state.display}>
          <span onClick={()=>this.chooseImageType('icons')}>Icon</span>
          <span onClick={()=>this.chooseImageType('shuffle')}>Shuffle</span>
          <span onClick={()=>this.chooseImageType('pokesho')}>Pokesho</span>
          <span onClick={()=>this.chooseImageType('xyanimated')}>XY animated</span>
          <span onClick={()=>this.chooseImageType('xy')}>XY</span>
          <span onClick={()=>this.chooseImageType('smd')}>Mystery Dungeon</span>
         </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickboldMenu} className ='btn btn-success dropbtn'>
        Bold Headers: {this.state.bold ? 'Yes' : 'No'}
       </button>
        <div className={this.state.boldMenu}>
           <span onClick={()=>this.setBold(true)}>Yes</span>
           <span onClick={()=>this.setBold(false)}>No</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickunderlineMenu} className ='btn btn-success dropbtn'>
        Underline Headers: {this.state.underlined ? 'Yes' : 'No'}
       </button>
        <div className={this.state.underlineMenu}>
           <span onClick={()=>this.setUnder(true)}>Yes</span>
           <span onClick={()=>this.setUnder(false)}>No</span>
          </div>
      </span>

     </div>
    );
  }
});

module.exports = Imagemenu;
