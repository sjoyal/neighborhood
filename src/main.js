import React from 'react';
import { render } from 'react-dom';

export function App(props) {
    return (
        <div>Hello Neighborhood World!</div>
    );
}

render(<App />, document.getElementById('app'));
