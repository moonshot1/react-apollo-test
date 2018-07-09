import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import renderer from 'react-test-renderer';
import App8, { QUERY } from './App8';

const wait = require('waait');

Enzyme.configure({ adapter: new Adapter() });

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

describe('QueryAPI', () => {
  let wrap;

  beforeEach(() => {
    wrap = mount(<MockedProvider mocks={mocks} addTypename={false}>
                   <App8 episode='EMPIRE'/>
                 </MockedProvider>);
  })

  it('Should contain the text Luke', async () => {
    await wait(0);
    console.log(wrap.html());
  });

  it('Should contain the text Luke', async () => {
    await wait(0);
    console.log("abc", expect(wrap.text()).toContain('Luke'));
  });

}) 