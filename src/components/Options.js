var React = require('react');
var Teamentry = require('./Teamentry');

var Options = React.createClass({
  getInitialState: function() {
    return {
      b1: 'dropdown-content',
      b2: 'dropdown-content',
      b3: 'dropdown-content',
      b4: 'dropdown-content',
      b5: 'dropdown-content',
      b6: 'dropdown-content',
      showProcess: true,
      font: 'Verdana',
      align: 'CENTER',
      size: 3
    };
  },

  handleClickB1: function() {
    if (this.state.b1 === 'dropdown-content') {
      this.setState({b1: 'dropdown-content show'});
    } else {
      this.setState({b1: 'dropdown-content'});
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
  
  handleClickB4: function() {
    if (this.state.b4 === 'dropdown-content') {
      this.setState({b4: 'dropdown-content show'});
    } else {
      this.setState({b4: 'dropdown-content'});
    }
  },

  showBuildProcess: function(type) {
    this.setState({
      showProcess: type,
      b1: 'dropdown-content'
    });
  },
  
  chooseFont: function(type) {
    this.setState({
      font: type,
      b2: 'dropdown-content'
    });
  },
  
  setAlign: function(type) {
    this.setState({
      align: type,
      b3: 'dropdown-content'
    });
  },
  
  setSize: function(size) {
    this.setState({
      size: size,
      b4: 'dropdown-content'
    });
  },

  render: function () {
    return (
     <div>
      <span className="dropdown template-type">
       <button onClick={this.handleClickB1} className ='btn btn-success dropbtn'>
        Build process: {this.state.showProcess ? 'Yes' : 'No'}
       </button>
        <div className={this.state.b1}>
           <span onClick={()=>this.showBuildProcess(true)}>Yes</span>
           <span onClick={()=>this.showBuildProcess(false)}>No</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickB2} className ='btn btn-success dropbtn'>
        Font: {this.state.font}
       </button>
        <div className={this.state.b2}>
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
       <button onClick={this.handleClickB3} className ='btn btn-success dropbtn'>
        Align: {this.state.align}
       </button>
        <div className={this.state.b3}>
           <span onClick={()=>this.setAlign('LEFT')}>Left</span>
           <span onClick={()=>this.setAlign('RIGHT')}>Right</span>
           <span onClick={()=>this.setAlign('CENTER')}>Center</span>
          </div>
      </span>
      <span className="dropdown template-type">
       <button onClick={this.handleClickB4} className ='btn btn-success dropbtn'>
        Header Size: {this.state.size}
       </button>
        <div className={this.state.b4}>
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
