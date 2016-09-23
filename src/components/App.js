import React, {Component} from 'react';
var NavBar = require('./navbar');
var Header = require('./header');
var Usage = require('./usage');
var Generator = require('./generator');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Usage />
        <Generator />
      </div>
    );
  }
}
