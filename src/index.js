/**
 * The "render()" function will render JSX markup and
 * place the resulting content into a DOM node. The "react"
 * object isn't explicitly used here, but it's used
 * by the transpiled JSX sorce.
 */
import React, { Component } from 'react';
//import { render } from 'react-dom';
import { render as renderJSX } from 'react-dom'; 

// Imports our two components that render children....
import MySection from './MySection';
import MyButton from './MyButton';
import MyComponent from './MyComponent';
import State from './State'
import ComponentState from './ComponentState';
import Counter from './Counter'
import Properties from './Properties';

// The two components we're to passing props to 
// when they're rendered. 
import MyButton2 from './MyButton'; 
import MyList from './MyList'; 

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
 
// This is the "application state". This data changes 
// over time, and we can pass the application data to 
// components as properties. 
const appState = { 
  text: 'My Button', 
  disabled: true, 
  items: [ 
    'First', 
    'Second', 
    'Third', 
  ], 
}; 
 
// Defines our own "render()" function. The "renderJSX()" 
// function is from "react-dom" and does the actual 
// rendering. The reason we're creating our own "render()" 
// function is that it contains the JSX that we want to 
// render, and so we can call it whenever there's new 
// application data. 
function render(props) { 
  renderJSX(( 
    <main> 
      { /* The "MyButton" component relies on the "text" 
           and the "disabed" property. The "text" property 
           is a string while the "disabled" property is a 
           boolean. */ } 
      <MyButton2
        text={props.text} 
        disabled={props.disabled} 
      /> 
 
      { /* The "MyList" component relies on the "items" 
           property, which is an array. Any valid 
           JavaScript data can be passed as a property. */ } 
      <MyList items={props.items} /> 
    </main> 
    ), 
    document.getElementById('app2') 
  ); 
} 
 
// Performs the initial rendering... 
render(appState); 
 
// After 1 second, changes some application data, then 
// calls "render()" to re-render the entire structure. 
setTimeout(() => { 
  appState.disabled = false; 
  appState.items.push('Fourth'); 
  render(appState); 
}, 1000); 