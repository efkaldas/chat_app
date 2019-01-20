import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Nav_bar from './components/nav_bar';
import Login from "./components/Login";
import Routes from "./Routes";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav_bar></Nav_bar>
      <Routes />
      </div>
    );
  }
}


export default App;
