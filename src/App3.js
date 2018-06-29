import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class App3 extends Component {

  constructor(props){
    super(props);
    this.testMethod = this.testMethod.bind();
  }

  testMethod() {
    console.log("it runs");
  }

  render() {
    

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
          // console.log("data obj", data);
          return (
            <div>
              <h1>{data.hero.name}</h1>

            </div>
          );
        }}
      </Query>
    )
    this.testMethod();
    return (
      <div>
        {HeroAndFriends({ episode: 'EMPIRE' })}
      </div>
    )
  }
}
