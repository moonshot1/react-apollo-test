import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import App3 from './App3';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('App4', () => {
  it('should render correctly', () => {
    const output = shallow(
      <App3 />
    );

    console.log(output.instance());
    //console.log(output.instance().dummyMethod);

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});