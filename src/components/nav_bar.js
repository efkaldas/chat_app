import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Link } from 'react-router-dom';
import User from '../classes/User';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import "./Login.css";
import Grid from '@material-ui/core/Grid';
import MenuItem from 'material-ui/MenuItem';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "open": false,
        "show": null
    };
}
handleToggle = () => this.setState({open: !this.state.open});
  
  render() {

   const userLinks = (
      <div className="nav-bar">
        <Button component={ Link } to="/" variant="contained" color="primary">Home</Button>
        <Button component={ Link } to="/chat" variant="contained" color="primary">Chat</Button>
        <Button component={ Link } to="/profile" variant="contained" color="primary">{User.getEmail()}</Button>
      </div>
    );
   const guestLinks = (
    <div className="nav-bar">
        <Button className="float-right" className="button" component={ Link } to="/login" variant="contained" color="primary">Login</Button>
        </div>
    );
    return (
      <div className="nav-bar">                 
        <div>
        <AppBar position="static">
        <Toolbar>
        <IconButton onClick={this.handleToggle} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        <Grid
      justify="space-between"
      container 
      spacing={24}
    >
        <Typography variant="h6" color="inherit" className="nav-bar"></Typography>             
        <Grid item>
            { User.isLogedIn() ? userLinks : guestLinks }
          </Grid>
          </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <IconButton onClick={this.handleToggle}></IconButton>
          <h1>Side Bar</h1>
          </Drawer>
        </div>
     </div>
    )
  }
}