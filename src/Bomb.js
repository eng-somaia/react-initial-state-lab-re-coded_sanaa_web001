import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const secondsLeft = initialCount;
    return (
      <div>
      this.state.secondsLeft === 0 ? 'Boom!' : '{this.state.secondsLeft} seconds left before I go boom!'
      </div>
    )
  }
}
