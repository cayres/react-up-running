'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

let mountNode = document.getElementById("app");

ReactDOM.render(
    <h1>
        <Logo /> Welcome to The App!
    </h1>,
    mountNode
); 