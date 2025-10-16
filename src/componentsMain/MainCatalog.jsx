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
  filters,
  setFilters,
  priceLow,
  setPriceLow,
  priceHigh,
  setPriceHigh,
  viewfilter
  }) => {
  return (
    <div className='MainCatalog flex w-full h-full gap-10'>
      <Aside 
        filters={filters} 
        setFilters={setFilters} 
        priceLow={priceLow} 
        setPriceLow={setPriceLow} 
        priceHigh={priceHigh} 
        setPriceHigh={setPriceHigh} 
      />

      <CatalogWithFilters
        addBasket={addBasket}
        handleClick={handleClick}
        inCart={inCart}
        removeFromCart={removeFromCart}
        toggleHeart={toggleHeart}
        heart={heart}
        phones={phones}
        viewfilter={viewfilter}
      />
    </div>
  )
}

export default MainCatalog
