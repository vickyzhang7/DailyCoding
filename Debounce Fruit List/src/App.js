import './App.css';
import React, { useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }
  , [value, delay]);
  return debouncedValue;
}


function App() {
  const fruits = ['apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'blackcurrant', 'cherry', 'cranberry', 'clementine', 'date', 'dragonfruit', 'elderberry', 'fig', 'grape', 'grapefruit', 'honeydew', 'kiwi', 'kumquat', 'lemon', 'lime', 'mango', 'mulberry', 'nectarine', 'orange', 'pear', 'persimmon', 'plum', 'pineapple', 'raspberry', 'strawberry', 'tangerine', 'tomato', 'watermelon'];
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search, 500);


  
  return (
    <div className="App">
      <h1>Day 2</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a fruit"
      />
        {fruits
          .filter((fruit) => fruit.includes(debouncedSearch))
          .map((fruit) => <li key={fruit}>{fruit}</li>)}
        {/* {fruits
          .filter((fruit) => fruit.includes(search))
          .map((fruit) => <li key={fruit}>{fruit}</li>)} */}
    </div>
  );
}

export default App;
