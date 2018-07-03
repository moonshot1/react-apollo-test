import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import renderer from 'react-test-renderer';

const wait = require('waait');

import { QUERY, App7, QueryAPI } from './App7';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const data = {
  loading: false,
  hero: {
    name: 'Luke'
  }
};

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

describe('Component', () => {

  let output;
  const methodToCall = jest.spyOn(App7.prototype, 'methodToCall');

  beforeEach(() => { 
    output = mount(<App7 name="Yolo" />);
  })

  it('Should render correctly', () => {
    expect(output).toMatchSnapshot();
  });

  it('State should initialize correctly', () => {
    expect(output.state()).toHaveProperty('a');
    expect(output.state()).toHaveProperty('b');
  })

  it('Should contain button component', () => {
    expect(output.find('Button')).toBeTruthy();
  })

  it('Should call function onclick event', () => {
    output.find({ id: 'abc' }).simulate('click');
    expect(methodToCall).toHaveBeenCalled();
  })

});

describe('QueryAPI', () => {
  let output2;

  beforeEach( () => {
    output2 = renderer.create(<MockedProvider mocks={mocks} addTypename={false}>
                <QueryAPI episode='EMPIRE' />
              </MockedProvider>);
  })

  it('Should render loading state initially', () => {
    expect(output2.toJSON()).toContain('Loading...');
  });

  it('QueryAPI renders without error', async () => {
    await wait(0);
    expect(output2).toMatchSnapshot();
  });

  it('Should contain the text Luke', async () => {
    await wait(0);
    const tree = output2.root.findByType("h1");
    expect(tree.children).toContain('Luke');
  });

}) 

