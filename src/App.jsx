import React from 'react';
import Header from './components/Header';
import Shares from './components/Shares';
import './App.css'
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="App">
        <Header/>
        <Shares/>
        <Catalog/>
    </div>
  );
}

export default App;
