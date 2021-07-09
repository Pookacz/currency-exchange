import React from "react";
import "./index.css";
import Select from '../Select/Select';
import CurrencyExchange from "../ExchangeCurrency/CurrencyExchange";

class Root extends React.Component {
  state = {
    changeCurrency: false,
    amount: 0,
    firstCurrency: "",
    secondCurrency: "",
    currencyList: ['USD', 'EUR',' GBP', 'PLN', 'CHF']
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
        
        <Select onChange={this.handleFirstSelect} currencyList={this.state.currencyList}/>
        <Select onChange={this.handleSecondSelect} currencyList={this.state.currencyList}/>
        
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
