import React from 'react'
import '../css/Discounts.css'
import heartt from '../png/Vector.svg';
import redHeart from  '../png/redHeart.svg';
import phones from '../phones.jsx';

const Discounts = ({addBasket, handleClick, inCart, removeFromCart, toggleHeart, heart}) => {
  return (
    <div className='discounts' >
        <div className='h6' >
            <h6 >Знижки</h6>
            <span></span>
        </div>
    
        <div className='phones-list' >
            {phones.map((phone) =>(
                <div key={phone.id} className='phone-card' >
                    <div className='phone-image' >
                        <img src={phone.image} alt="" />
                        <span className='discount' >{phone.discount}</span>
                    </div>
                    <div className='textt' >
                        <h1>{phone.title}</h1>
                    </div>
                    <div className='phone-price' >
                        <p>{phone.price}</p>
                        <span>{phone.oldPrice}</span>
                    </div>
                    <div className='instock' >
                        {phone.inStock? (
                            <h3 className='phone-instock-true' >В наявності</h3>
                        ) : (
                            <h3 className='phone-instock-false' >Закінчився</h3>
                        )}
                        <div className='heart' >
                          <img
                            onClick={() => toggleHeart(phone.id)}
                            src={heart[phone.id] ? redHeart : heartt} // вибираємо картинку по стану
                            alt="heart"
                          />

                        </div>
                    </div>
                    {phone.inStock ? (
                      inCart[phone.id] ? (
                          <button onClick={() => {
                            
                            handleClick(phone.id);
                            removeFromCart(phone.id);
                          } }  className='buttonremove' >Видалити з корзини</button>
                                    
                      ):(
                          <button onClick={() => {
                          addBasket(phone.id);
                          handleClick(phone.id);
                        }} className='button' >В корзину</button>
                      )
                      
                    ): (
                      <button className='buttonfalse' >Сповістити про наявність</button>
                    )}
                    
                </div>
            ))}
        </div>
        <div className='hr' >
          <span></span>
        </div>
    </div>
  )
}

export default Discounts