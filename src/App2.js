import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const QUERY = gql`
  query HeroFriends($episode: Episode!) {
    hero(episode: $episode) {
      name
    }
  }
`;

export const HeroAndFriends = ({ episode }) => (
  <Query query={QUERY} variables={{ episode }}>
    {({ data, error, loading }) => {
      console.log("error", error);
      if (error) return "Oops";
      if (loading) return 'Patience young grasshopper...';
      return (
        <div>
          <h1>{data.hero.name}</h1>
        </div>
      );
    }}
  </Query>
);

HeroAndFriends.propTypes = { episode: PropTypes.string };
HeroAndFriends.defaultProps = { episode: 'EMPIRE' };

const App2 = () => <HeroAndFriends episode="EMPIRE" />;

export default App2;