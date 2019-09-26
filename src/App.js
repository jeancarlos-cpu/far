import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import Drawer from './components/drawer/Drawer'
import SignIn from './components/sign-in/SignIn'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Divider } from '@material-ui/core';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
  }

  handleOnSignIn = () => {
    this.setState({ loggedIn: true });
  }

  render() {

    if (this.state.loggedIn) {
      return <Drawer />;
    }
    else {
      return <SignIn handleOnSignIn={this.handleOnSignIn} />;
    }
  }

}

export default App;
