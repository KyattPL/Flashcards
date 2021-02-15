import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class LoginPage extends React.Component {

    constructor() {
        super()
        this.state = {
            validated: false
        }
    }

    handleSubmit = (event) => {
        this.setState({ validated: true });
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const email = form.elements[0].value;
            const password = form.elements[1].value;
            console.log(`Email: ${email}, pass: ${password}`);
        }
    }

    render() {
        return (
            <Container className="mt-3">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                        <FormControl.Feedback type="valid">Looks great!</FormControl.Feedback>
                        <FormControl.Feedback type="invalid">Please provide a proper email address</FormControl.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control required type="password" placeholder="Password"></Form.Control>
                        <FormControl.Feedback type="valid">Looks great!</FormControl.Feedback>
                        <FormControl.Feedback type="invalid">Password is required</FormControl.Feedback>
                    </Form.Group>

                    <Button variant="success" type="submit">Submit</Button>
                </Form>
                <h6 className="mt-2">Don't have an account?</h6>
                <a href="/signup">Sign up</a>
            </Container>
        );
    }
}

export default LoginPage;