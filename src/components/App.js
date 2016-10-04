import React, {Component} from 'react';
var NavBar = require('./NavBar');
var Header = require('./Header');
var Usage = require('./Usage');
var Generator = require('./Generator');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Generator />
        <Usage />
      </div>
    );
  }
}
