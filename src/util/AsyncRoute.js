import React, { Component } from 'react';
import { Route } from 'react-router-dom';

function errorFetching(err) {
    throw new Error(err);
}

function fetchSplitComponent(callback) {
    return class SplitComponent extends Component {
        constructor(...args) {
            super(...args);
            this.state = {
                Component: null,
            };
        }

        componentWillMount() {
            if (!this.state.Component) {
                callback()
                    .then(Component => this.setState({ Component }))
                    .catch(errorFetching);
            }
        }

        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />
            }

            return null;
        }
    }
}

export default function AsyncRoute({ strictMatch, location, fileImport }) {
    return <Route exact={strictMatch} path={location} component={fetchSplitComponent(fileImport)} />;
}
