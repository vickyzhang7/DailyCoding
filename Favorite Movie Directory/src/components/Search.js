import React,{ useState } from 'react'

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 2) {
      onSearch(value);
    }
  };

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        value={query}
        onChange={handleChange}
      />
    </section>
  )
}

export default Search
