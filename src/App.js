import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Nav_bar from './components/nav_bar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Nav_bar></Nav_bar>

      <Route path="/" render={
        () => {
          return (<h1>Helloo</h1>);
        }
      }/>
      <Route path="/login" render={
        () => {
          return (<h1>Helloo</h1>);
        }
      }/>
        <h1>Helloo</h1>
        <p>Yes yes</p>
      </div>
      </Router>
    );
  }
}

export default App;
