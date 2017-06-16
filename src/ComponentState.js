import React, { Component } from 'react';

export default class ComponentState extends Component {
    // The initial state is used, until something 
    // calls "setState()", at which point the state is 
    // merged with this state. 
    state = {
        heading: 'React awesomesauce (busy)',
        content: 'Loading...',
    }

    render(){
        const {heading, content} = this.state;
        return (
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        );
    }
}