import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  countDown = (this.state.secondsLeft) =>{
    let x = setInterval(()=>{
      newSecondsLeft = this.state.secondsLeft - 1
      this.setState({
        secondsLeft: newSecondsLeft
      })

    },1000)
  }
  render() {
    const secondsLeft = initialCount;
    return (
      <div>
      second'{this.state.secondsLeft} seconds left before I go boom!'
      this.countDown();
      </div>
    )
  }
}
