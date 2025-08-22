// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {times: 0}
  onIncrementCount = () => {
    this.setState(prevState => ({times: prevState.times + 1}))
  }

  render() {
    const {times} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="times-value"> {times} </span> times{' '}
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
