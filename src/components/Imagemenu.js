var React = require('react');
var Submitbutton = require('./Submitbutton');
var imageOptions = {
  'pokesho': 'Pokesho',
  'icons': 'Icons',
  'shuffle': 'Shuffle',
  'xyanimated': 'XY Animated',
  'xystatic': 'XY',
  'smd': 'Super Mystery Dungeon'
};

var Imagemenu = React.createClass({
  getInitialState: function() {
    return {
      display: 'dropdown-content',
      boldMenu: 'dropdown-content',
      underlineMenu: 'dropdown-content',
      fontMenu: 'dropdown-content',
      imageType: 'xyanimated',
      bold: false,
      underlined: false,
      tfont: 'verdana'
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

  handleClicksetHeadFont: function() {
    if (this.state.fontMenu === 'dropdown-content') {
      this.setState({fontMenu: 'dropdown-content show lower-button'});
    } else {
      this.setState({fontMenu: 'dropdown-content'});
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

  setHeadFont: function(font) {
    this.setState({
      tfont: font,
      fontMenu: 'dropdown-content'
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
     format={this.props.format}
     tfont={this.state.tfont}
     />
      <span className="dropdown">
       <button onClick={this.handleClick} className ='btn btn-success dropbtn'> <i className="fa fa-image" aria-hidden="true"></i> Type: {imageOptions[this.state.imageType]}</button>
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
        <i className="fa fa-bold" aria-hidden="true"></i> Headers: {this.state.bold ? 'Yes' : 'No'}
       </button>
        <div className={this.state.boldMenu}>
           <span onClick={()=>this.setBold(true)}>Yes</span>
           <span onClick={()=>this.setBold(false)}>No</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickunderlineMenu} className ='btn btn-success dropbtn'>
        <i className="fa fa-underline" aria-hidden="true"></i> Headers: {this.state.underlined ? 'Yes' : 'No'}
       </button>
        <div className={this.state.underlineMenu}>
           <span onClick={()=>this.setUnder(true)}>Yes</span>
           <span onClick={()=>this.setUnder(false)}>No</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClicksetHeadFont} className ='btn btn-success dropbtn'>
        Header <i className="fa fa-font" aria-hidden="true"></i> {this.state.tfont}
       </button>
        <div className={this.state.fontMenu}>
           <span onClick={()=>this.setHeadFont('Arial')}>Arial</span>
           <span onClick={()=>this.setHeadFont('Book Antiqua')}>Book Antiqua</span>
           <span onClick={()=>this.setHeadFont('Courier New')}>Courier New</span>
           <span onClick={()=>this.setHeadFont('Georgia')}>Georgia</span>
           <span onClick={()=>this.setHeadFont('Tahoma')}>Tahoma</span>
           <span onClick={()=>this.setHeadFont('Times New Roman')}>Times New Roman</span>
           <span onClick={()=>this.setHeadFont('Verdana')}>Verdana</span>
          </div>
      </span>
     </div>
    );
  }
});

module.exports = Imagemenu;
