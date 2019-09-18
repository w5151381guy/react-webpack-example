import React, { Component } from 'react'

class Timer extends Component {
  state = { time: 0 }

  handleClick = () => this.setState({ time: this.state.time + 1 })

  render() {
    const { time } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>計數器</button>
        <h4>您點擊了{time}次</h4>
      </div>
    )
  }
}

export default Timer
