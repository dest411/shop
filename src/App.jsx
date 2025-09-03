import React, { useState } from 'react';
import Header from './components/Header';
import Shares from './components/Shares';
import './App.css'
import Catalog from './components/Catalog';
import Discounts from './components/Discounts';

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [inCart, setInCart] = useState({});

  const handleClick = (id) => {
    setInCart(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  
  };
  const removeFromCart = () =>{
    setCartCount(num => num - 1)
  }

  const addBasket = () => {
    setCartCount(prev => prev +1);
    console.log(cartCount);
    
};

  return (
    <div className="App">
        <Header cartCount={cartCount} />
        <Shares/>
        <Catalog/>
        <Discounts addBasket={addBasket} handleClick={handleClick} inCart={inCart} removeFromCart={removeFromCart}/>
    </div>
  );
}

export default App;
