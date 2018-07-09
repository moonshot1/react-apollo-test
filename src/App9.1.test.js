/* __tests__/MockedCat.test.js */
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import mockMComponent from './testSupport/mockMComponent';
import wait from 'waait';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from 'react-apollo/lib/test-utils';
// Make sure the MockComponent is imported before the CatContainer

import CatContainer, {QUERY} from './CatContainer';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./Cat', () => mockMComponent);

describe('Mocked Cat', () => {
  let mocks;
  beforeEach(() => {
    mocks = [
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
  });
  test('<CatContainer />', async () => {
    const wrapper = mount((
      <MockedProvider mocks={mocks} addTypename={false} >
        <CatContainer episode='EMPIRE' />
      </MockedProvider>
    ));
    await wait(0);
    console.log("testing", wrapper.update().find(mockMComponent).prop('hero'));
    expect(wrapper.update().find(mockMComponent).prop('hero')).toMatchObject({ name: 'Luke' });
  });
});