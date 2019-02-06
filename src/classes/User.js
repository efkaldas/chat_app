import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';


export default class User extends React.Component {
  constructor(Email, Password) {
    this.email = Email;
    this.password = Password;
  }
  static isLogedIn() {
    if(this.email != null) 
      return true;
      else return false;
  }

  static getEmail() {
    return this.email;
  }
  static getPass() {
    return this.password;
  }
}