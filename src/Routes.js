import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Profile from "./components/Profile";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/Chat" exact component={Chat} />
    <Route path="/Profile" exact component={Profile} />
  </Switch>;
