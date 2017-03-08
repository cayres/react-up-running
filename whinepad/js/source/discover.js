'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo';
import Button from './components/Button';

let mountNode = document.getElementById("pad");

ReactDOM.render(
    <div style={{
    padding: '20px'
}}>
    <h1>Component Discoverer</h1>

    <h2>Logo</h2>
    <div style={{
        display: 'inline-block',
        background: 'purple'
    }}>
        <Logo/>
    </div>

    <h2>Button</h2>
    <div>
        Button with onClick:
        <Button onClick={() => alert('ouch')}>Click me</Button>
    </div>
    <div>
        A link:
        <Button href="http://reactjs.com">Follow me</Button>
    </div>
    <div>Custom Class Name:
        <Button className="custom">I do nothing</Button>
    </div>
</div>, mountNode);