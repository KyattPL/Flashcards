import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class SignUpPage extends React.Component {

    constructor() {
        super()
        this.state = {
            validated: false
        }
    }

    sendNewUser = (nick, email, pass) => {
        fetch("/signup", {
            body: JSON.stringify({ nick: nick, email: email, pass: pass }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.text()).then(data => {
            if (data == "OK") {
                window.location.replace(window.location.origin);
            }
        });
    }

    validateEmail = (nick, email, pass) => {
        if (email == "") {
            this.setState({ validated: this.state.validated, properData: false });
            return;
        }
        fetch("/emailInUse", {
            body: JSON.stringify({ email: email.value }),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text()).then(response => {
            if (response == "OK") {
                this.sendNewUser(nick, email.value, pass);
            } else {
                email.setCustomValidity('Email address already in use');
                email.reportValidity();
                this.setState({ validated: this.state.validated, properData: false });
            }
        });
    }

    handleSubmit = (event) => {
        this.setState({ validated: true });
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const nick = form.elements[0];
        const email = form.elements[1];
        const pass = form.elements[2];
        const checkbox = form.elements[3];

        if (nick.checkValidity() && pass.checkValidity() && checkbox.checkValidity()) {
            this.validateEmail(nick.value, email, pass.value);
        }
    }

    render() {
        return (
            <Container className="mt-3">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formNickname">
                        <Form.Label>Nickname:</Form.Label>
                        <Form.Control name="nickname" required type="text" placeholder="Nickname" />
                        <Form.Control.Feedback type="valid">Looks great!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Nickname is required</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control name="email" required type="email" placeholder="Enter email" />
                        <FormControl.Feedback type="valid">Looks great!</FormControl.Feedback>
                        <FormControl.Feedback id="emailStatus" type="invalid">Please input correct email address</FormControl.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" required type="password" placeholder="Password"></Form.Control>
                        <FormControl.Feedback type="valid">Looks great!</FormControl.Feedback>
                        <FormControl.Feedback type="invalid">Password is required</FormControl.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formCheck">
                        <Form.Check>
                            <Form.Check.Input required />
                            <Form.Check.Label>Agree to terms of service</Form.Check.Label>
                            <Form.Control.Feedback type="invalid">You must agree before submitting</Form.Control.Feedback>
                        </Form.Check>
                    </Form.Group>
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default SignUpPage;