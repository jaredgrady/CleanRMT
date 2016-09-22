import React, {Component} from 'react';
var NavBar = require('./navbar');
var Header = require('./header');
var Teamentry = require('./teamentry');
var Usage = require('./usage');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Usage />
        <Teamentry />
      </div>
    );
  }
}
