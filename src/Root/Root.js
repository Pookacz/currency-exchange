import React from "react";
import "./index.css";
import styles from './Root.module.scss';
import Input from '../Input/Input';
import Select from "../Select/Select";
import Button from '../Button/Button';
import CurrencyExchange from "../ExchangeCurrency/CurrencyExchange";

class Root extends React.Component {
  state = {
    changeCurrency: false,
    amount: 0,
    firstCurrency: "",
    secondCurrency: "",
    currencyList: ["USD", "EUR", " GBP", "PLN", "CHF"],
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
      <>
      <div className={styles.container}>

        <div className={styles.wrapper}>
          <h1 className={styles.title}>Currency Exchange</h1>
          <div className={styles.form}>
            <Input 
              type="number"
              name="amount"
              autoComplete="off"
              onChange={this.handleChange}
            />


            <Select
              onChange={this.handleFirstSelect}
              currencyList={this.state.currencyList}
            />
            <Select
              onChange={this.handleSecondSelect}
              currencyList={this.state.currencyList}
            />
            <Button title='Exchange' onClick={this.changeCurrency}/>
          </div>
            {change && (
              <CurrencyExchange
                amount={this.state.amount}
                firstCurrency={this.state.firstCurrency}
                secondCurrency={this.state.secondCurrency}
              />
            )}
        </div>
      </div>
      </>
    );
  }
}

export default Root;
