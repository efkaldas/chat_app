import React, { Component } from "react";
import { Button, FormGroup, TextField } from '@material-ui/core';


export default class Messages extends React.Component {
    constructor(Message) {
        this.Message = Message;
    }
    static addMessage(i, Message) {
        Message[i] = Message;
    }
}