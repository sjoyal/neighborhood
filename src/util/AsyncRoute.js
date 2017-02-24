import React, { Component } from 'react';
import { Route } from 'react-router-dom';

function errorFetching(err) {
    throw new Error(err);
}

function fetchRoute(path) {
    return System.import(path).then(module => module.default);
}

function fetchSplitComponent(props, callback) {
    return class SplitComponent extends Component {
        constructor(...args) {
            super(...args);

            this.state = {
                Component: null,
            };
        }

        componentWillMount() {
            const { match: { path } } = props;
            if (!this.state.Component) {
                callback(path)
                    .then(Component => this.setState({ Component }))
                    .catch(errorFetching);
            }
        }

        render() {
            const { Component } = this.state;
            if (component) {
                return <Component {...props} />
            }

            return null;
        }
    }
}

export default function AsyncRoute({ location, component }) {
    return <Route path={location} render={props => fetchSplitComponent(props, fetchRoute)} />;
}
