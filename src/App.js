import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <>
      <Navbar />

      <Searchbar />

      <div className="App">
      </div>
    </>
  );
}

export default App;
