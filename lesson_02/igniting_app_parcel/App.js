import React from "react";
import ReactDOM from 'react-dom/client'

const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);

const heading = React.createElement('h1', {id:'heading'}, 'Namaste React');
const parent = React.createElement('div', {className: 'container', draggable: true}, heading);

root.render(parent);