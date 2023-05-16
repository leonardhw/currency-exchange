import React from "react";

export default function CurrencyRates({ currency, rates }) {
  const weBuy = (rates * 1.05).toPrecision(5);
  const weSell = (rates * 0.95).toPrecision(5);
  return (
    <>
      <tr key={currency}>
        <td>{currency}</td>
        <td>{weBuy}</td>
        <td>{rates.toPrecision(8)}</td>
        <td>{weSell}</td>
      </tr>
    </>
  );
}
