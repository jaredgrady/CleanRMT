var React = require('react');
var Teamentry = require('./Teamentry');

var Options = React.createClass({
  getInitialState: function() {
    return {
      display: 'dropdown-content',
      showProcess: true
    };
  },

  handleClick: function() {
    if (this.state.display === 'dropdown-content') {
      this.setState({display: 'dropdown-content show'});
    } else {
      this.setState({display: 'dropdown-content'});
    }
  },

  chooseOptions: function(type) {
    this.setState({
      showProcess: type,
      display: 'dropdown-content'
    });
  },

  render: function () {
    return (
     <div>
      <span className="dropdown" id="template-type">
       <button onClick={this.handleClick} className ='btn btn-success dropbtn'>
        Show build process: {this.state.showProcess ? 'Yes' : 'No'}
       </button>
        <div id="myDropdown" className={this.state.display}>
           <span onClick={()=>this.chooseOptions(true)}>Yes</span>
           <span onClick={()=>this.chooseOptions(false)}>No</span>
          </div>
      </span>
      <Teamentry showProcess={this.state.showProcess}/>
     </div>
    );
  }
});

module.exports = Options;
