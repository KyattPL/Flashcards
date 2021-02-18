import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from './components/Header.js';
import Deck from './components/Deck.js';
import LoginPage from './components/LoginPage.js';
import tryLoggingOut from './components/tryLoggingOut.js';
import SignUpPage from './components/SignUpPage.js';

import { Redirect, Route, Switch } from 'react-router-dom';

function Routes(props) {
    return (
        <div className="App">
            <Header user={props.user} loggedStatus={props.loggedStatus} changeLoggedStatus={props.changeLoggedStatus} />
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
                    <h1>About test</h1>
                </Route>
                <Route path="/dashboard">
                    <h1>Dashboard test</h1>
                </Route>
                <Route path="/faq">
                    <h1>FAQ test</h1>
                </Route>
                <Route path="/login">
                    {props.loggedStatus ? <Redirect to="/" /> : <LoginPage changeLoggedStatus={props.changeLoggedStatus} />}
                </Route>
                <Route path="/signup">
                    {props.loggedStatus ? <Redirect to="/" /> : <SignUpPage />}
                </Route>
                <Route path="/logout">
                    {props.loggedStatus ? console.log("oh boi") : <Redirect to="/" />}
                </Route>
                <Route>
                    <h1>Bad page</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;