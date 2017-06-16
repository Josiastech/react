/**
 * This component renders the keys and values of its state. Each value defaults to loading..., 
 * because we don't yet know the value. Let's write some code that sets the state of each state property individually:
 */
import React, { Component } from 'react';

export default class Counter extends Component {
    // Set the initial state
    state = {
        first: 'Loading....',
        second: 'Loading...',
        third: 'Loading...',
    }

    render(){
        const {state} = this;

        // reder a list of items from the
        // component state.
        return (
            <ul>
                {Object.keys(state).map(i => (
                    <li key={i}>
                        <strong>{i}: </strong>{state[i]}
                    </li>
                ))}
            </ul>
        );
    }
}