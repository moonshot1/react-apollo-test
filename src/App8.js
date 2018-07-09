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

export default class App8 extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const QueryAPI = (props) => (
      <Query query={QUERY} variables={{ episode: props.episode }}>
        {({ data, error, loading }) => {
          // console.log("error", error);
          if (error) return "Oops";
          if (loading) return 'Loading...';
          return (
            <div>
              <p>{data.hero.name}</p>
              {/* <Button name="button"/> */}
            </div>
          );
        }}
      </Query>
    );
    return (
      <div>
        <QueryAPI episode={this.props.episode}/>
      </div>
    )
  }
}
