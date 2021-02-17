import React from 'react';

import Nav from 'react-bootstrap/Nav';

function LoginName(props) {
    return (
        props.loggedStatus ?
            <Nav className="navbar-text mr-3">{props.user}</Nav>
            : <Nav className="navbar-text mr-3">Not logged in</Nav>
    );
}

export default LoginName;