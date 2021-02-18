import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import LoginName from './LoginName.js';
import tryLoggingOut from '../components/tryLoggingOut.js';
import '../styles/Header.css';

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand as={Link} to="/">Flashcards</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar" />
            <Navbar.Collapse id="responsive-navbar">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                </Nav>
                <LoginName user={props.user} loggedStatus={props.loggedStatus} />
                {props.loggedStatus ?
                    <Button className="mr-3" variant="outline-warning" onClick={() => tryLoggingOut(props.changeLoggedStatus)}>Log out</Button>
                    : <Button className="mr-3" variant="outline-success" as={Link} to="/login">Log in</Button>
                }
                <Form inline className="mt-2 mt-lg-0">
                    <FormControl type="text" placeholder="Search" className="mr-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;