import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Button from './Button';

export const QUERY = gql`
  query HeroFriends($episode: Episode!) {
    hero(episode: $episode) {
      name
    }
  }
`;

export const QueryAPI = (props) => (
  <Query query={QUERY} variables={{ episode: props.episode }}>
    {({ data, error, loading }) => {
      // console.log("error", error);
      if (error) return "Oops";
      if (loading) return 'Loading...';
      let app7Props = { name: data.hero.name };
      return (
        <App7 {...app7Props} />
      );
    }}
  </Query>
);

export class App7 extends Component {
  constructor(props){
    super(props);
    this.methodToCall = this.methodToCall.bind();
    this.state = {
      a: 1,
      b: 2
    }
  }

  methodToCall(){
    console.log("hello");
  } 

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Button clickMethod={this.methodToCall} name="button" />
      </div>
    )
  }
}
