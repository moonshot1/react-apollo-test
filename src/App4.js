import React, { Component } from 'react'

export default class App4 extends Component {

  constructor(props){
    super(props);
    this.dummyMethod = this.dummyMethod.bind();
  }

  dummyMethod(){
    console.log("it works");
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.dummyMethod}>Call Method</button>
      </div>
    )
  }
}
