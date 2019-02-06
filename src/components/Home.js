import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';
import User from '../classes/User';


export default class Home extends Component {
    render() {
      const userLinks = (
        <div className="Home">
           <form onSubmit={this.handleSubmit}>
            <h1>Welcome to the chat system!</h1>
            </form>
        </div>
      );
      const guestLinks = (
        <div className="Home">
          <h1>Login first!</h1>
        </div>
      );
        return (
          <div className="Home">
          { User.isLogedIn() ? userLinks : guestLinks }
          </div>
        );
      }
    }