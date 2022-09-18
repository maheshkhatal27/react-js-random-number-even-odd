import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  incrementCounter = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  getCountType = () => {
    const {count} = this.state
    const remainder = count % 2
    let flag
    if (remainder === 0) {
      flag = true
    } else {
      flag = false
    }
    return flag ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const countType = this.getCountType()

    return (
      <div className="bg-container">
        <div className="color-container">
          <h1 className="count">Count {count}</h1>
          <p className="count-tpye">Count is {countType}</p>
          <button
            className="button"
            type="button"
            onClick={this.incrementCounter}
          >
            Increment
          </button>
          <p className="information">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
