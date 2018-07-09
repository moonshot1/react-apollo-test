/* __tests__/MountedCat.test.js */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import CatContainer, {QUERY} from './CatContainer';

Enzyme.configure({ adapter: new Adapter() });

test('Mounted Cat', async () => {
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
        data: {
          hero: { name: 'Luke' }
        }
      },
    },
  ];
  const wrapper = mount((
    <MockedProvider mocks={mocks} addTypename={false}>
      <CatContainer episode='EMPIRE' />
    </MockedProvider>
  ));
  await wait(0); // Wait a tick to get past the loading state
  expect(wrapper.text()).toContain('name: Luke'); // this text is inside p tag in render
});

