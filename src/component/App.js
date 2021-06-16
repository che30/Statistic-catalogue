import React from 'react';
import FetchData from '../container/Fetchdata';
import SearchInput from './SearchInput';

function App() {
  FetchData();
  return (
    <div className="App">
      <SearchInput />
    </div>
  );
}

export default App;
