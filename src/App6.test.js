import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from 'react-apollo/lib/test-utils';

import { QUERY, App6 } from './App6';
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

describe('Conponent', () => {
  it('Component should render correctly', () => {
    const output = mount(<App6 data={data} />);

    output.setProps({
      data: {
        loading: false,
        hero: {
          name: 'Sky'
        }
      }
    }) 

    //console.log(output.instance());

    expect(output).toMatchSnapshot(); 
  });

});

describe('HOC', () => {
  it('HOC renders without error', done => {

    const output = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App6 data={data} />
      </MockedProvider>,
    );

    setTimeout(() => {
      expect(toJson(output)).toMatchSnapshot();

      done()
    }, 2000);
  });
})

