import React,{useState} from 'react'
import Aside from './Aside'
import '../cssInfo/MainCatalog.css'
import CatalogWithFilters from './CatalogWithFilters'

const MainCatalog = () => {
  const [cartCount, setCartCount] = useState(0);
    const [inCart, setInCart] = useState({});
    const [heart, setHeart] = useState({})
  
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
    const removeFromCart = () =>{
      setCartCount(num => num - 1)
    }
  
    const addBasket = () => {
      setCartCount(prev => prev +1);
      console.log(cartCount);
    
      
    };
  return (
    <div className='MainCatalog flex gap-10' >
        <Aside/>
        <CatalogWithFilters
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

export default MainCatalog