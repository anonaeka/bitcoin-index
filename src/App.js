import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';

function App() {
  const [currency, setCurrency] = useState("AUD")

  const updateCurrency = (newCurrency) => {
    setCurrency(newCurrency)
    console.log("Currency was updated")
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bitcoin Index</h1>
      <CurrencySelector {...{currency, setCurrency}} />
      <BitcoinData />
    </div>
  );
}

export default App;
