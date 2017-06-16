/**
 * The "render()" function will render JSX markup and
 * place the resulting content into a DOM node. The "react"
 * object isn't explicitly used here, but it's used
 * by the transpiled JSX sorce.
 */
import React from 'react';
import { render } from 'react-dom';

/**
 * Render the JSX markup. Notice the XML syntax
 * mixed with JS? Thi is replaced y the 
 * transpiler before it reached the browser.
 */
reder(
    (<p>Hello, <strong>JSX</strong></p>),
    document.getElementById('app')
)

// Prints a list of the golbal HTML tags
// that React know about.
console.log(
    'Available tags',
    Object.keys(React.DOM).sort()
);

