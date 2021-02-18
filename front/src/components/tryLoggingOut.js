import React from 'react';
import { Redirect } from 'react-router-dom';

function tryLoggingOut(changeLoggedStatus) {
    fetch("/logout").then(res => res.text()).then(response => {
        console.log(response);
        changeLoggedStatus();
    });
}

export default tryLoggingOut;