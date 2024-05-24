import React, { useState } from 'react';
import './log.css';

function Demo() {
  const [state, setState] = useState({
    available: 10,
    availableStatus: "available",
    cashStatus: "Available",
    cash: 200
  });

  const handleSellClick = () => {
    if (state.available > 0) {
      setState(prevState => ({
        ...prevState,
        available: prevState.available - 1,
        availableStatus: prevState.available - 1 === 0 ? "unavailable" : "available"
      }));
    }
  };

  const handleBuyClick = () => {
    if (state.cash > 0) {
      setState(prevState => ({
        ...prevState,
        available: prevState.available + 1,
        cashStatus: prevState.cash - 10 < 0 ? "Low Balance" : "Available",
        cash: prevState.cash - 10
      }));
    }
  };

  return (
    <div>
      <h2>Available: {state.available}</h2>
      <h2>Available Status: {state.availableStatus}</h2>
      <h2>Cash: {state.cash}</h2>
      <h2>Cash Status: {state.cashStatus}</h2>
      <button onClick={handleSellClick}>Sell</button>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
}

export default Demo;