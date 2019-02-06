import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';
import "./Login.css";
import User from '../classes/User';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  isLoged() {
    return User.isLogedIn();
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
   // event.preventDefault();
    //const user = new User(this.state.email,this.state.password);
    User.email = this.state.email;
    User.password = this.state.password;
    alert("Welcome!  " + User.getEmail());
    this.props.history.push("/chat");
  }

  

  render() {
    return (
      <div className="Login">
      <form onSubmit={this.handleSubmit}>
        <h1>Login to the system</h1>
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
          <Button
          variant="contained" color="primary"
          disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}


