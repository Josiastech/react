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
import MyComponent from './MyComponent';
import State from './State'
import ComponentState from './ComponentState';

const enabled = true;
const text = 'A button';
const placeholder = 'input value...';
const size = 50;

// An array that we want to render as a list
const array = [
    'First', 
    'Second', 
    'Third', 
]

// An object that we want to render as a list...
const object = {
    first: 1,
    second: 2,
    third: 3,
};



/**
 * Render the JSX markup. Notice the XML syntax
 * mixed with JS? Thi is replaced y the 
 * transpiler before it reached the browser.
 */
/*render(
    (<p>Hello, <strong>JSX</strong></p>),
    document.getElementById('root')
)*/

// "MyComponent" extends "Component", which means that 
// we can now use it in JSX markup
/*class MyComponent extends Component {
    render(){
        return (
            <section>
                <h1>My Component</h1>
                <p>Content in my Component</p>
            </section>
        )
    }
}*/

render(
    //<MyComponent></MyComponent>,
    <MySection>
        <MyButton>My Button Text</MyButton>
    </MySection>,
    document.getElementById('app')
);

render(
    <MyComponent>
        <MyComponent.First />
        <MyComponent.Second />
    </MyComponent>,
    document.getElementById('root')
);

// We're rendering a "<button>" and an "<input>" 
// element, both of which use the "{}" JavaScript 
// expression syntax to fill in property, and text 
// values.
/*render(( 
  <section> 
    <button disabled={!enabled}>{text}</button> 
    <input placeholder={placeholder} size={size} /> 
  </section> 
  ), 
  document.getElementById('expression') 
); */


render ((
    <section>
        <h1>Array</h1>
        { /* Maps "array" to an array of "<li>"s. 
         Note the "key" property on "<li>". 
         This is necessary for performance reasons, 
         and React will warn us if it's missing. */ } 
         <ul>
             {array.map (i=>(
                 <li key={i}>{i}</li>
             ))}
         </ul>
         { /* Maps "object" to an array of "<li>"s. 
         Note that we have to use "Object.keys()" 
         before calling "map()" and that we have 
         to lookup the value using the key "i". */ } 
         <ul>
             {Object.keys(object).map(i=>(
                 <li key={i}> 
                    <strong>{i}: </strong>{object[i]} 
                </li> 
             ))}
         </ul>
    </section>),
    document.getElementById('expression')
);


render ( 
    (<State />),
    document.getElementById('state')
);

// The "render()" function returns a reference to the 
// rendered component. In this case, it's an instance 
// of "MyComponent". Now that we have the reference, 
// we can call "setState()" on it whenever we want. 
const componentState = render(
    (<ComponentState />),
    document.getElementById('state2')
);


// After 2 seconds, set the state of "componentState",
// which causes it to re-render itself
setTimeout(() => {
    componentState.setState({
        heading: 'React Awesomesauce', 
        content: 'Done!', 
    });
}, 3000);