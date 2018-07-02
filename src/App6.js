import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query HeroFriends($episode: Episode!) {
    hero(episode: $episode) {
      name
    }
  }
`;

export class App6 extends Component {

  testMethod = () => {
    console.log("test function");
  }

  render() {
    console.log('props', this.props);
    const isLoading = this.props.data.loading;
    return (
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <p>{this.props.data.hero.name}</p>
          
        )}
      </div>  
    )
  }
}

export default graphql(QUERY, {
  options: ({ episode }) => ({ variables: {episode: 'EMPIRE'} }),
})(App6);
