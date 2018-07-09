import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
const wait = require('waait');

import index from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('index', () => {
  let output2;

  beforeEach(() => {
    output2 = renderer.create(<index/>);
  })

  it('QueryAPI renders without error', async () => {
    await wait(0);
    expect(output2).toMatchSnapshot();
  });

})