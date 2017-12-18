import React from "react"

class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      totalNumber: 0
    }
  }

  handleNumberChange = event => {
    // console.log("Number changed!", event.target.value)
    this.setState({
      number: event.target.value,
      totalNumber: event.target.value * 1000
    })
  }

  handleTotalNumberChange = event => {
    this.setState({
      totalNumber: event.target.value,
      number: event.target.value / 1000
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="number"
            name="number"
            onChange={this.handleNumberChange}
            value={this.state.number} />

          <input
            type="number"
            name="totalNumber"
            onChange={this.handleTotalNumberChange}
            value={this.state.totalNumber} />

          <p>Total number: {this.state.totalNumber}, total number: {this.state.totalNumber}</p>
        </form>
      </div>
    )
  }

}

export default Calculator
