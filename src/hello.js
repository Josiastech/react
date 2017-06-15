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
render(
    (<p>Hello, <strong>JSX</strong></p>),
    document.getElementById('root')
)


// This JSX markup describes some fairly-sophisticated 
// markup. Yet, it's easy to read, because it's XML and 
// XML is good for concisely-expressing hierarchical 
// structure. This is how we want to think of our UI, 
// when it needs to change, not as an individual element 
// or property. 
render(( 
  <section> 
    <header> 
      <h1>A Header</h1> 
    </header> 
    <nav> 
      <a href="item">Nav Item</a> 
    </nav> 
    <main> 
      <p>The main content...</p> 
    </main> 
    <footer> 
      <small>&copy; 2016</small> 
    </footer> 
  </section> 
  ), 
  document.getElementById('app') 
); 