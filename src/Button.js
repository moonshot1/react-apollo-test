import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <button id="abc" onClick={this.props.clickMethod} type="button">{this.props.name}</button>
      </div>
    )
  }
}
