import {useState} from 'react'
import '../css/Discounts.css'
import heartt from '../png/Vector.svg';
import redHeart from  '../png/redHeart.svg';
import phones from '../phones.jsx';
import backblack from '../png/backblack.svg'


const Discounts = ({addBasket, handleClick, inCart, removeFromCart, toggleHeart, heart}) => {
  const [offset, setOffset] = useState(0);
  
  return (
    <div className='discounts' >
        <div className='h6' >
            <h6 >Знижки</h6>
            <span></span>
        </div>
        <div className='w-full overflow-hidden relative' >
          <img src={backblack} 
                    onClick={() => setOffset(prev => Math.max(prev - 300, 0))} 
                    className='w-[30px] aspect-square border-2 border-black rounded-full p-1.5 absolute left-0 top-1/2 cursor-pointer z-20 rotate-180' alt="" 
                />
            <div className='w-[95%] m-auto m-0 flex gap-[40px] relative transition-transform' style={{ transform: `translateX(-${offset}px)` }} >
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
            <img src={backblack} 
                  onClick={() => setOffset(prev => Math.min(prev + 300, phones.length * 225 - 0.85 * window.innerWidth))} 
                  className='w-[30px] aspect-square border-2 border-black rounded-full p-1.5 absolute right-0 top-1/2 cursor-pointer z-20 ' alt="" 
              />
          </div>
        <div className='hr' >
          <span></span>
        </div>
    </div>
  )
}

export default Discounts