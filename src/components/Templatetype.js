var React = require('react');
var Teamentry = require('./teamentry');

var Templatetype = React.createClass({
  getInitialState: function() {
    return {
      display: 'dropdown-content',
      imageType: 'default'
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
      templateType: type,
      display: 'dropdown-content'
    });
  },

  render: function () {
    return (
     <div>
      <span className="dropdown" id="template-type">
       <button onClick={this.handleClick} className ='btn btn-success dropbtn'>Template: {this.state.imageType}</button>
        <div id="myDropdown" className={this.state.display}>
           <span onClick={()=>this.chooseImageType('template-1')}>Template 1</span>
           <span onClick={()=>this.chooseImageType('template-2')}>Template 2</span>
           <span onClick={()=>this.chooseImageType('template-3')}>Template 3</span>
           <span onClick={()=>this.chooseImageType('template-4')}>Template 4</span>
          </div>
      </span>
      <Teamentry templateType={this.state.templateType}/>
     </div>
    );
  }
});

module.exports = Templatetype;
