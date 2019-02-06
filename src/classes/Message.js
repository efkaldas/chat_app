import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';

export default class Message extends React.Component {
    constructor(senderId, text) {
      this.senderId = senderId;
      this.text = text;
    }
  }