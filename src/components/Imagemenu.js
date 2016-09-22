var React = require('react');

var Imagemenu = React.createClass({
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
      imageType: type,
      display: 'dropdown-content'
    });
  },

  render: function () {
    return (
      <span className="dropdown">
       <button onClick={this.handleClick} className ='btn btn-success dropbtn'>Image Type: {this.state.imageType}</button>
        <div id="myDropdown" className={this.state.display}>
           <span onClick={()=>this.chooseImageType('icon')}>Icon</span>
           <span onClick={()=>this.chooseImageType('shuffle')}>Shuffle</span>
           <span onClick={()=>this.chooseImageType('pokesho')}>Pokesho</span>
          </div>
      </span>
    );
  }
});

module.exports = Imagemenu;
