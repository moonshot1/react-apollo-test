import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Cat from './Cat';

export const QUERY = gql`
  query HeroFriends($episode: Episode!) {
    hero(episode: $episode) {
      name
    }
  }
`;

const CatContainer = (props) => (
  <Query query={QUERY} variables={{ episode: props.episode }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }
      return <Cat hero={data.hero} />;
    }}
  </Query>
);
export default CatContainer;