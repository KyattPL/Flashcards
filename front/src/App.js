import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import Flashcard from './components/Flashcard.js';
import Deck from './components/Deck.js';
import LoginPage from './components/LoginPage.js';
import SignUpPage from './components/SignUpPage.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Container>
              <Row className="mt-3">
                <Deck />
              </Row>
              <Row className="mt-3">
                <Deck />
              </Row>
            </Container>
          </Route>
          <Route path="/about">
            <h1>We are yes</h1>
          </Route>
          <Route path="/dashboard">
            <h1>Ur level: 1</h1>
          </Route>
          <Route path="/faq">
            <h1>1. Do you like yes? - yes</h1>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;