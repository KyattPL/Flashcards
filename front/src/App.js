import { React, Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: "Diego"
    }
  }

  checkCookie() {
    fetch('/isLoggedIn').then(res => res.text()).then(result => {
      if (result == "true") {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  componentDidMount() {
    this.checkCookie();
    setInterval(() => this.checkCookie(), 5000);
  }

  changeLoggedStatus = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes user={this.state.username} loggedStatus={this.state.isLoggedIn} changeLoggedStatus={this.changeLoggedStatus} />
      </Router>
    );
  }
}

export default App;