import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  countDown = () =>{
    let x = setInterval(()=>{
      newSecondsLeft = this.state.secondsLeft - 1
      this.setState({
        secondsLeft: newSecondsLeft
      })
      if (newSecondsLeft === 0) {
         clearInterval(x);
         'Boom!'}
    },1000)
  } 
  render() {
    const secondsLeft = initialCount
    return (
      <div>
      second'{this.state.secondsLeft} seconds left before I go boom!'
      </div>
    )
  }
}
