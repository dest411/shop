import React from 'react'
import Aside from './Aside'
import '../cssInfo/MainCatalog.css'
import CatalogWithFilters from './CatalogWithFilters'

const MainCatalog = ({
  addBasket,
  handleClick,
  inCart,
  removeFromCart,
  toggleHeart,
  heart,
  phones,
  selectedMemory,
  setSelectedMemory,
  priceFrom,
  priceTo,
  setPriceFrom,
  setPriceTo
}) => {
  return (
    <div className='MainCatalog flex gap-10'>
      <Aside
        selectedMemory={selectedMemory}
        setSelectedMemory={setSelectedMemory}
        priceFrom={priceFrom}
        priceTo={priceTo}
        setPriceFrom={setPriceFrom}
        setPriceTo={setPriceTo}
      />
      <CatalogWithFilters
        addBasket={addBasket}
        handleClick={handleClick}
        inCart={inCart}
        removeFromCart={removeFromCart}
        toggleHeart={toggleHeart}
        heart={heart}
        phones={phones}
      />
    </div>
  )
}

export default MainCatalog
