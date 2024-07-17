import React, { useState } from "react";
import "./index.css";

export default function StockData() {
  const [input, setInput] = useState('');
  const [stockData, setStockData] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${input}`)
      .then(response => response.json())
      .then(data => {
        if (data.data.length > 0) {
          setStockData(data.data[0]);
          setNoResults(false);
        } else {
          setStockData(null);
          setNoResults(true);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setStockData(null);
        setNoResults(true);
      });
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className=""
          id="submit-button"
          data-testid="submit-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </section>
      {stockData && (
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
          <li className="py-10">Open: {stockData.open}</li>
          <li className="py-10">Close: {stockData.close}</li>
          <li className="py-10">High: {stockData.high}</li>
          <li className="py-10">Low: {stockData.low}</li>
        </ul>
      )}
      {noResults && (
        <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">
          No Results Found
        </div>
      )}
    </div>
  );
}
