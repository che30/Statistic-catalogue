import React from 'react';
import SearchInput from './SearchInput';
import Navbar from './Navbar';
import Movies from '../container/Movies';

const App = () => (
  <div className="">
    <Navbar />
    <SearchInput />
    <Movies />
  </div>
);

export default App;
