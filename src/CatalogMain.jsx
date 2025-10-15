import React, { useState } from 'react'
import Header from './components/Header'
import phones from './phones.jsx'
import Info from './componentsMain/Info'
import MainCatalog from './componentsMain/MainCatalog.jsx'

const CatalogMain = () => {
  const [cartCount, setCartCount] = useState(0);
  const [inCart, setInCart] = useState({});
  const [heart, setHeart] = useState({});
  const [selectedMemory, setSelectedMemory] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

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

  const removeFromCart = () => setCartCount(num => num - 1);
  const addBasket = () => setCartCount(prev => prev + 1);

  const filteredPhones = phones.filter(phone => {
    // перевірка пам'яті
    const memoryCheck = selectedMemory.length === 0 || selectedMemory.includes(phone.memory);

    // перевірка ціни
    const priceNum = parseInt(phone.price.replace(/\s|₴/g, ''));
    const from = priceFrom ? parseInt(priceFrom) : 0;
    const to = priceTo ? parseInt(priceTo) : Infinity;
    const priceCheck = priceNum >= from && priceNum <= to;

    return memoryCheck && priceCheck;
  });

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
        selectedMemory={selectedMemory}
        setSelectedMemory={setSelectedMemory}
        priceFrom={priceFrom}
        priceTo={priceTo}
        setPriceFrom={setPriceFrom}
        setPriceTo={setPriceTo}
        phones={filteredPhones}
      />
    </div>
  )
}

export default CatalogMain
