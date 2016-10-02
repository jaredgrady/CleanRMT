var React = require('react');
var Teamentry = require('./Teamentry');

var Options = React.createClass({
  getInitialState: function() {
    return {
      processMenu: 'dropdown-content',
      fontMenu: 'dropdown-content',
      alignMenu: 'dropdown-content',
      sizeMenu: 'dropdown-content',
      showProcess: true,
      font: 'Verdana',
      align: 'CENTER',
      size: 3
    };
  },

  handleClickprocessMenu: function() {
    if (this.state.processMenu === 'dropdown-content') {
      this.setState({processMenu: 'dropdown-content show'});
    } else {
      this.setState({processMenu: 'dropdown-content'});
    }
  },

  handleClickfontMenu: function() {
    if (this.state.fontMenu === 'dropdown-content') {
      this.setState({fontMenu: 'dropdown-content show'});
    } else {
      this.setState({fontMenu: 'dropdown-content'});
    }
  },

  handleClickalignMenu: function() {
    if (this.state.alignMenu === 'dropdown-content') {
      this.setState({alignMenu: 'dropdown-content show'});
    } else {
      this.setState({alignMenu: 'dropdown-content'});
    }
  },

  handleClicksizeMenu: function() {
    if (this.state.sizeMenu === 'dropdown-content') {
      this.setState({sizeMenu: 'dropdown-content show'});
    } else {
      this.setState({sizeMenu: 'dropdown-content'});
    }
  },

  showBuildProcess: function(type) {
    this.setState({
      showProcess: type,
      processMenu: 'dropdown-content'
    });
  },

  chooseFont: function(type) {
    this.setState({
      font: type,
      fontMenu: 'dropdown-content'
    });
  },

  setAlign: function(type) {
    this.setState({
      align: type,
      alignMenu: 'dropdown-content'
    });
  },

  setSize: function(size) {
    this.setState({
      size: size,
      sizeMenu: 'dropdown-content'
    });
  },

  render: function () {
    return (
     <div>
      <span className="dropdown template-type">
       <button onClick={this.handleClickprocessMenu} className ='btn btn-success dropbtn'>
        Build process: {this.state.showProcess ? 'Yes' : 'No'}
       </button>
        <div className={this.state.processMenu}>
           <span onClick={()=>this.showBuildProcess(true)}>Yes</span>
           <span onClick={()=>this.showBuildProcess(false)}>No</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickfontMenu} className ='btn btn-success dropbtn'>
        Font: {this.state.font}
       </button>
        <div className={this.state.fontMenu}>
           <span onClick={()=>this.chooseFont('Arial')}>Arial</span>
           <span onClick={()=>this.chooseFont('Book Antiqua')}>Book Antiqua</span>
           <span onClick={()=>this.chooseFont('Courier New')}>Courier New</span>
           <span onClick={()=>this.chooseFont('Georgia')}>Georgia</span>
           <span onClick={()=>this.chooseFont('Tahoma')}>Tahoma</span>
           <span onClick={()=>this.chooseFont('Times New Roman')}>Times New Roman</span>
           <span onClick={()=>this.chooseFont('Verdana')}>Verdana</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickalignMenu} className ='btn btn-success dropbtn'>
        Align: {this.state.align}
       </button>
        <div className={this.state.alignMenu}>
           <span onClick={()=>this.setAlign('LEFT')}>Left</span>
           <span onClick={()=>this.setAlign('RIGHT')}>Right</span>
           <span onClick={()=>this.setAlign('CENTER')}>Center</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClicksizeMenu} className ='btn btn-success dropbtn'>
        Header Size: {this.state.size}
       </button>
        <div className={this.state.sizeMenu}>
           <span onClick={()=>this.setSize(1)}>1</span>
           <span onClick={()=>this.setSize(2)}>2</span>
           <span onClick={()=>this.setSize(3)}>3</span>
           <span onClick={()=>this.setSize(4)}>4</span>
           <span onClick={()=>this.setSize(5)}>5</span>
           <span onClick={()=>this.setSize(6)}>6</span>
          </div>
      </span>
      <Teamentry
      showProcess={this.state.showProcess}
      font={this.state.font}
      align={this.state.align}
      size={this.state.size}
      />
     </div>
    );
  }
});

module.exports = Options;
