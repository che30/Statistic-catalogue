import React from 'react';
import { SearchInput } from './SearchInput';
import Movies from './Movies';
import Navbar from './Navbar';

function App() {
  return (
    <div className="">
      <Navbar />
      <SearchInput />
      <Movies />
    </div>
  );
}

export default App;
