import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AsyncRoute from './util/AsyncRoute';

export function App(props) {
    return (
        <BrowserRouter>
            <div>
                <h3>Hello Neighborhood World!</h3>
                <span><Link to="/quiz">Take the quiz!</Link></span>
                <span><Link to="/results">See the results!</Link></span>

                <AsyncRoute location="/quiz" callback={() => System.import('./quiz').then(m => m.default)} />
                <AsyncRoute location="/results" callback={() => System.import('./results').then(m => m.default)} />
            </div>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById('app'));
