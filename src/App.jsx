import React from 'react';
import Header from './components/Header';
import Shares from './components/Shares';
import './App.css'
import Catalog from './components/Catalog';
import Discounts from './components/Discounts';

function App() {
  return (
    <div className="App">
        <Header/>
        <Shares/>
        <Catalog/>
        <Discounts/>
    </div>
  );
}

export default App;
