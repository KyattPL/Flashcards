import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { Route, Switch, Link } from 'react-router-dom';

import LoginName from './LoginName.js';
import '../styles/Header.css';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">Flashcards</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar" />
            <Navbar.Collapse id="responsive-navbar">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                </Nav>
                <LoginName />
                <Button className="mr-3" variant="outline-success" href="/login">Log in</Button>
                <Form inline className="mt-2 mt-lg-0">
                    <FormControl type="text" placeholder="Search" className="mr-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;