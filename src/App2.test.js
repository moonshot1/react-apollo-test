import React from 'react';

import { MockedProvider } from 'react-apollo/lib/test-utils';
import TestRenderer from 'react-test-renderer';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';


// The component AND the query need to be exported
import { QUERY, HeroAndFriends } from './App2';

const mocks = [
  {
    request: {
      query: QUERY,
      variables: {
        episode: 'EMPIRE',
      },
      fetchPolicy: 'no-cache'
    },
    result: {
        hero: { name: 'Luke'}
    },
  },
];

it('renders without error', done => {
  
  const output = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <HeroAndFriends episode="EMPIRE" />
    </MockedProvider>,
  );

 

  setTimeout(() => {
    console.log(output.toJSON());
    expect(output.toJSON()).toMatchSnapshot();
    
    done()
  }, 1000);
});