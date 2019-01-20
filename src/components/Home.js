import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';


export default class Home extends Component {
    render() {
        return (
          <div className="Home">
          <form onSubmit={this.handleSubmit}>
            <h1>Login to the system</h1>
            </form>
          </div>
        );
      }
    }