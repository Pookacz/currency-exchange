import React from "react";
import "./index.css";
import CurrencyExchange from "../ExchangeCurrency/CurrencyExchange";

class Root extends React.Component {
  state = {
    changeCurrency: false,
    amount: 0,
    firstCurrency: "",
    secondCurrency: "",
  };

  changeCurrency = () => {
    this.setState({
      change: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      change: false, //this prevents to abuse HTTP requests
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  handleFirstSelect = (e) => {
    this.setState({
      firstCurrency: e.target.value,
    });
  };

  handleSecondSelect = (e) => {
    this.setState({
      secondCurrency: e.target.value,
    });
  };

  render() {
    const { change } = this.state;

    return (
      <div>
        <input
          type="number"
          name="amount"
          autoComplete="off"
          onChange={this.handleChange}
        />

        <select onChange={this.handleFirstSelect} defaultValue={"Select"}>
          <option value="Select" disabled hidden>
            Select
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="PLN">PLN</option>
          <option value="CHF">CHF</option>
        </select>

        <select onChange={this.handleSecondSelect} defaultValue={"Select"}>
          <option value="Select" disabled hidden>
            Select
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="PLN">PLN</option>
          <option value="CHF">CHF</option>
        </select>
        <button onClick={this.changeCurrency}>Exchange.</button>
        {change && (
          <CurrencyExchange
            amount={this.state.amount}
            firstCurrency={this.state.firstCurrency}
            secondCurrency={this.state.secondCurrency}
          />
        )}
      </div>
    );
  }
}

export default Root;
