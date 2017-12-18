import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0
    }
  }

handleVatRate = event => {
  this.setState({
    vatRate: event.target.value 
  })
}

handleIncVat = event => {
  // console.log("Number changed!", event.target.value)
  this.setState({
    exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value)),
    incVat: parseInt(event.target.value)
  })
}

handleExVat = event => {
  this.setState({
    incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value)),
    exVat: parseInt(event.target.value)
  })
}

render() {
  return (
    <div>

      <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
      <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>

      <div className="radiobuttons">
        <form>
          <p>25%
            <input
              type="radio"
              name="vatradio"
              onChange={this.handleVatRate}
              value="25" />
          </p>

          <p>12%
            <input
              type="radio"
              name="vatradio"
              onChange={this.handleVatRate}
              value="12" />
          </p>

          <p>6%
            <input
              type="radio"
              name="vatradio"
              onChange={this.handleVatRate}
              value="6" />
          </p>
        </form>
      </div>

      <div className="inputfields">
        <form>

          <p>Inklusive moms, kr:</p>
          <input
            type="number"
            name={this.incVatToExtVat}
            onChange={this.handleIncVat}
            value={this.state.incVat} />

          <p>Exklusive moms, kr:</p>
          <input
            type="number"
            name={this.exVatToIncVat}
            onChange={this.handleExVat}
            value={this.state.exVat} />

          <p> Momssumma, kr:</p>
          <input
            type="number"
            name="vatSum"
            value={this.state.incVat - this.state.exVat} />

        </form>
      </div>
    </div>
  )
}

}

export default App
