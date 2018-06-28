import React from 'react';

import { MockedProvider } from 'react-apollo/lib/test-utils';
import TestRenderer from 'react-test-renderer';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';


// The component AND the query need to be exported
const QUERY = gql`
  query HeroFriends($episode: Episode!) {
    hero(episode: $episode) {
      name
    }
  }
`;

const HeroAndFriends = ({ episode }) => (
  <Query query={QUERY} variables={{ episode }}>
    {({ data, error, loading }) => {
      if (error) return 'Oops!';
      if (loading) return 'Patience young grasshopper...';
      console.log("data obj", data);
      return (
        <div>
          <h1>{data.hero.name}</h1>

        </div>
      );
    }}
  </Query>
)

const mocks = [
  {
    request: {
      query: QUERY,
      variables: {
        episode: 'NEWHOPE',
      },
    },
    result: {
      hero: { name: 'Luke' }
    },
  },
];

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <HeroAndFriends episode="NEWHOPE" />
    </MockedProvider>
  );
});