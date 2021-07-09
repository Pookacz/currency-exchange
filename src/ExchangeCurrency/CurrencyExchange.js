import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyExchange = ({ amount, firstCurrency, secondCurrency }) => {
  const [currencyExchange, setCurrencyExchange] = useState("");

  const options = {
    method: "GET",
    url: "https://free.currconv.com/api/v7/convert",
    params: {
        q: `${firstCurrency}_${secondCurrency}`,
        compact: "ultra",
        apiKey: "29e05fab18f98f597625",
    },

  };

  useEffect(() => {
    console.log(axios.request(options))
    axios.request(options).then((res) => {
      setCurrencyExchange(res.data[`${firstCurrency}_${secondCurrency}`]);
    });
  });

  return(
    <div>
      <p>{amount * currencyExchange}</p>
    </div>
  )
};

export default CurrencyExchange;
