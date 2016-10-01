var React = require('react');
var Submitbutton = require('./Submitbutton');

var Imagemenu = React.createClass({
  getInitialState: function() {
    return {
      display: 'dropdown-content',
      b2: 'dropdown-content',
      b3: 'dropdown-content',
      imageType: 'icons',
      bold: false,
      underlined: false
    };
  },

  handleClick: function() {
    if (this.state.display === 'dropdown-content') {
      this.setState({display: 'dropdown-content show'});
    } else {
      this.setState({display: 'dropdown-content'});
    }
  },
  
  handleClickB2: function() {
    if (this.state.b2 === 'dropdown-content') {
      this.setState({b2: 'dropdown-content show'});
    } else {
      this.setState({b2: 'dropdown-content'});
    }
  },
  
  handleClickB3: function() {
    if (this.state.b3 === 'dropdown-content') {
      this.setState({b3: 'dropdown-content show'});
    } else {
      this.setState({b3: 'dropdown-content'});
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
      b2: 'dropdown-content'
    });
  },
  
  setUnder: function(bool) {
    this.setState({
      underlined: bool,
      b3: 'dropdown-content'
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
        <div id="myDropdown" className={this.state.display}>
           <span onClick={()=>this.chooseImageType('icons')}>Icon</span>
           <span onClick={()=>this.chooseImageType('shuffle')}>Shuffle</span>
           <span onClick={()=>this.chooseImageType('pokesho')}>Pokesho</span>
           <span onClick={()=>this.chooseImageType('xyanimated')}>XY animated</span>
           <span onClick={()=>this.chooseImageType('xy')}>XY</span>
           <span onClick={()=>this.chooseImageType('smd')}>Mystery Dungeon</span>
          </div>
      </span>
            <span className="dropdown template-type">
       <button onClick={this.handleClickB2} className ='btn btn-success dropbtn'>
        Bold Headers: {this.state.bold ? 'Yes' : 'No'}
       </button>
        <div className={this.state.b2}>
           <span onClick={()=>this.setBold(true)}>Yes</span>
           <span onClick={()=>this.setBold(false)}>No</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickB3} className ='btn btn-success dropbtn'>
        Underline Headers: {this.state.underlined ? 'Yes' : 'No'}
       </button>
        <div className={this.state.b3}>
           <span onClick={()=>this.setUnder(true)}>Yes</span>
           <span onClick={()=>this.setUnder(false)}>No</span>
          </div>
      </span>

     </div>
    );
  }
});

module.exports = Imagemenu;
