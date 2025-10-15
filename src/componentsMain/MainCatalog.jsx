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
  setFilters
}) => {
  return (
    <div className='MainCatalog flex gap-10'>
      <Aside filters={filters} setFilters={setFilters} />
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
