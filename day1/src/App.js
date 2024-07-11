import './App.css';
import { useState } from 'react';

function App() {
  const fruits = [
    'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Strawberry',
    'Kiwi', 'Peach', 'Grapes', 'Plum', 'Cherry', 'Melon',
    'Watermelon', 'Papaya', 'Fig', 'Pear', 'Lemon', 'Lime',
    'Blueberry', 'Raspberry', 'Blackberry', 'Cranberry', 'Pomegranate',
    'Apricot', 'Grapefruit', 'Tangerine', 'Lychee', 'Guava',
    'Persimmon', 'Durian', 'Jackfruit', 'Dragon Fruit', 'Star Fruit'
  ];
  const [search, setSearch] = useState('');
  const handleInput = (e) => {
    setSearch(e.target.value);
  }



  return (
    <div className="App">
      <h1>Day 1</h1>
      <input type="text" placeholder="The Fruit that you want search" onChange={handleInput}/>
      <div>
      {/* also can use include() method */}
          {fruits.filter((fruit) => fruit.toLowerCase().startsWith(search.toLowerCase())).map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
      </div> 

    </div>
  );
}

export default App;
