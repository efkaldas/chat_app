import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';
import User from '../classes/User';
import "./Login.css";

  
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = async event => {
     event.preventDefault();
     //const user = new User(this.state.email,this.state.password);
      User.email = this.state.email;
      User.password = this.state.password;
     alert("Successfully changed!");
     this.props.history.push("/Profile");
   }
    render() {
      const userLinks = (
        <div className="Profile">
              <form onSubmit={this.handleSubmit}>
            <p>User email: {User.getEmail()}</p>
            <p>User password: {User.getPass()}</p>
            <h2>Insert email and password to change it on new one</h2>
            <FormGroup id="email">
          <TextField
        id="email"
        label="Email"
        margin="normal"
        variant="outlined"
        type="email"
        value={this.state.email}
        onChange={this.handleChange}
      />
                </FormGroup>
                <FormGroup id="password" >
          <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
        variant="outlined"
        value={this.state.password}
        onChange={this.handleChange}
      />
          </FormGroup>
          <Button variant="contained" color="primary" type="submit" disabled={!this.validateForm()}> Change </Button>
          </form>
        </div>
      );
      const guestLinks = (
        <div className="Profile">
          <h1>Login first!</h1>
        </div>
      );
        return (
          <div className="Profile">
            <h1>Profile page</h1>
            { User.isLogedIn() ? userLinks : guestLinks }
          </div>
        );
      }
    }