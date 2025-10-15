import React, { useState } from 'react'
import Header from './components/Header'
import phones from './phones.jsx'
import Info from './componentsMain/Info'
import MainCatalog from './componentsMain/MainCatalog.jsx'

const CatalogMain = () => {
  const [cartCount, setCartCount] = useState(0)
  const [inCart, setInCart] = useState({})
  const [heart, setHeart] = useState({})
  const [filters, setFilters] = useState({
    memory: [],
    ram: [],
    brand: [],
    cores: []
  })

  const toggleHeart = (id) => {
    setHeart(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleClick = (id) => {
    setInCart(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const removeFromCart = () => {
    setCartCount(num => num - 1)
  }

  const addBasket = () => {
    setCartCount(prev => prev + 1)
  }

  // фільтрація
  const filteredPhones = phones.filter(phone => 
    (filters.memory.length === 0 || filters.memory.includes(phone.memory)) &&
    (filters.ram.length === 0 || filters.ram.includes(phone.ram)) &&
    (filters.brand.length === 0 || filters.brand.includes(phone.brand)) &&
    (filters.cores.length === 0 || filters.cores.includes(String(phone.cores)))
  )

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
        filters={filters}
        setFilters={setFilters}
        phones={filteredPhones}
      />
    </div>
  )
}

export default CatalogMain
