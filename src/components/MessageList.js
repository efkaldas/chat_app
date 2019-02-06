import React, { Component } from "react";
import "./Login.css";

export default class MessageList extends React.Component {
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
             <div class="Row">
               <div class="sender">
                 {message.senderId}
               </div>
               <div class="message">
                 {message.text}
               </div>
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }