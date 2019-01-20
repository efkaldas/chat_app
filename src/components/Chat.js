import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';


export default class Chat extends Component {
    render() {
        return (
          <div className="Chat">
          <form onSubmit={this.handleSubmit}>
            <h1>Chat</h1>
            </form>
          </div>
        );
      }
    }