import React from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {

    class RequireAuth extends React.Component {
        componentWillUpdate(nextProps) {
            console.log('loading: ', nextProps.data.loading, 'user: ', nextProps.data.user);
            if(!nextProps.data.loading && !nextProps.data.user) {
                hashHistory.push('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return graphql(currentUserQuery)(RequireAuth)
}
