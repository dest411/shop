import React, { useState } from 'react'
import Header from './components/Header'
import Info from './componentsMain/Info'
import MainCatalog from './componentsMain/MainCatalog.jsx'

const CatalogMain = () => {
  const [cartCount, setCartCount] = useState(0);
  const [inCart, setInCart] = useState({});
  const [heart, setHeart] = useState({});

  const toggleHeart = (id) => {
    setHeart(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleClick = (id) => {
    setInCart(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const removeFromCart = () => {
    setCartCount(num => num - 1);
  };

  const addBasket = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Info />
      <MainCatalog
        addBasket={addBasket}
        handleClick={handleClick}
        inCart={inCart}
        removeFromCart={removeFromCart}
        toggleHeart={toggleHeart}
        heart={heart}
      />
    </div>
  )
}

export default CatalogMain