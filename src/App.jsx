import { useEffect, useState } from "react";
import axios from "./apis/axios";
import "./App.css";
import CurrencyRates from "./components/CurrencyRates";

function App() {
  const API_KEY = "ab349c4c1a194f8ba84ac5ed92c82b49";
  const symbols = "CAD,EUR,IDR,JPY,CHF,GBP";
  const [rates, setRates] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/rates/latest?apikey=${API_KEY}&symbols=${symbols}`);
        setRates(data.rates);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(rates).map(([currency, rates]) => (
            <CurrencyRates currency={currency} rates={+rates} key={currency} />
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: "12px" }}>
        <p>Rates are based from 1 USD.</p>
        <p>
          This application uses API from{" "}
          <a href="https://currencyfreaks.com" target="_blank">
            https://currencyfreaks.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
