/**
 * The "render()" function will render JSX markup and
 * place the resulting content into a DOM node. The "react"
 * object isn't explicitly used here, but it's used
 * by the transpiled JSX sorce.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

// Imports our two components that render children....
import MySection from './MySection';
import MyButton from './MyButton';

/**
 * Render the JSX markup. Notice the XML syntax
 * mixed with JS? Thi is replaced y the 
 * transpiler before it reached the browser.
 */
render(
    (<p>Hello, <strong>JSX</strong></p>),
    document.getElementById('root')
)

// "MyComponent" extends "Component", which means that 
// we can now use it in JSX markup
class MyComponent extends Component {
    render(){
        return (
            <section>
                <h1>My Component</h1>
                <p>Content in my Component</p>
            </section>
        )
    }
}

render(
    //<MyComponent></MyComponent>,
    <MySection>
        <MyButton>My Button Text</MyButton>
    </MySection>,
    document.getElementById('app')
);