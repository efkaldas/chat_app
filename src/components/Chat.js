import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';
import MessageList from './MessageList';
import User from '../classes/User';

var MessagesArray = [
    {
      senderId: "Johan@one.lt",
      text: "Hello baby"
    }
  ]
  
export default class Chat extends Component {
    constructor() {
        super()
        this.state = {
           messages: MessagesArray
        }
      }
      handleSubmit = async event => {
         event.preventDefault();
         MessagesArray.push({
          senderId: User.getEmail(),
          text: this.state.text
         })
         this.resetValue();
       //  alert("Parasem!  " + MessagesArray[3].text);
       }
       handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      resetValue = () => {
        this.setState({text: ''});
      }

    render() {
      const userLinks = (
        <div className="Chat">
            <form onSubmit={this.handleSubmit}>
            <MessageList messages = {this.state.messages}/>
            <div>
              <div>
              <FormGroup id="text">
            <TextField
            id="text"
            label="Message"
            multiline
            rowsMax="4"
            margin="normal"
            variant="outlined" 
            value={this.state.text}  
            onChange={this.handleChange}
            fullWidth   
            />
             </FormGroup>
            </div>
            <div>
              <Button id="button" type="submit" > Send </Button>
              </div>
          </div>
          </form>
        </div>
      );
      const guestLinks = (
        <div className="Chat">
                      <h1>Login first!</h1>
        </div>
      );
        return (
          <div className="Chat">
            <h1>Chat</h1>
            { User.isLogedIn() ? userLinks : guestLinks }
          </div>
        );
      }
    }