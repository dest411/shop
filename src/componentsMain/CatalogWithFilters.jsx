import React from 'react'
import '../css/Discounts.css'
import heartt from '../png/Vector.svg';
import redHeart from  '../png/redHeart.svg';

const CatalogWithFilters = ({ addBasket, handleClick, inCart, removeFromCart, toggleHeart, heart, phones, viewfilter }) => {
  return (
    <div className='w-full h-auto '>
      <div className='w-full h-auto '>
        
          {viewfilter ? (
            <div className='phones-list '>
            
                {phones.length === 0 ? (
                  <div className=' absolute top-[10%]'>
                    <p className=' w-full  text-4xl'>Змініть фільтри, нічого не знайдено</p>
                  </div>
                ) : (
                  phones.map((phone) => (
                    <div key={phone.id} className='phone-card'>
                      <div className='phone-image'>
                        <img src={phone.image} alt="" />
                        <span className='discount'>{phone.discount}</span>
                      </div>
                      <div className='textt'>
                        <h1>{phone.title}</h1>
                      </div>
                      <div className='phone-price'>
                        <p>{phone.price}</p>
                        <span>{phone.oldPrice}</span>
                      </div>
                      <div className='instock'>
                        {phone.inStock ? (
                          <h3 className='phone-instock-true'>В наявності</h3>
                        ) : (
                          <h3 className='phone-instock-false'>Закінчився</h3>
                        )}
                        <div className='heart'>
                          <img
                            onClick={() => toggleHeart(phone.id)}
                            src={heart[phone.id] ? redHeart : heartt}
                            alt="heart"
                          />
                        </div>
                      </div>
                      {phone.inStock ? (
                        inCart[phone.id] ? (
                          <button
                            onClick={() => {
                              handleClick(phone.id);
                              removeFromCart(phone.id);
                            }}
                            className='buttonremove'
                          >
                            Видалити з корзини
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              addBasket(phone.id);
                              handleClick(phone.id);
                            }}
                            className='button'
                          >
                            В корзину
                          </button>
                        )
                      ) : (
                        <button className='buttonfalse'>Сповістити про наявність</button>
                      )}
                    </div>
                  ))
                )}
                </div>
             ): (
              // SDKFBSBKDFBJS
              <div className='flex flex-col items-center w-full h-auto  '>
                {phones.map((phone) => (
                  <div key={phone.id} className='flex justify-center items-center w-full h-full bg-slate-200  py-7'>
                    <div className='flex w-[70%]  h-auto gap-4' > 
                      <div className='relative '  >
                          <img src={phone.image} alt={phone.title} />
                          <span className="
                            absolute 
                            bg-[#EBBA1A] 
                            text-black 
                            w-[65px] 
                            h-[45px] 
                            rounded-[12px] 
                            flex 
                            items-center 
                            justify-center 
                            text-[18px] 
                            right-0
                            top-0
                          ">
                            {phone.discount}
                          </span>
                          <p></p>
                      </div>
                      <div className='flex flex-col gap-4 items-start justify-start w-auto h-full ' >
                        <h1 className='text-2xl' >{phone.title}</h1>
                        <div>
                          <p className='text-gray-600' >{`Оперативна пам'ять: ${phone.ram}`}</p>
                          <p className='text-gray-600' >{`Кількість ядер: ${phone.cores}`}</p>
                        </div>
                        {phone.inStock ? (
                          <p className='text-green-600' >В наявності</p>
                        ) : ( <p className='text-red-600' >Закінчився</p> )}
                      </div>
                    </div>

                    <div className=' w-[30%] h-[100%] ' >
                      <div className='flex gap-4' >
                        <h1 className='text-2xl' >{phone.price}</h1>
                        <h4 className='text-sm line-through' >{phone.oldPrice}</h4>
                      </div>
                      <div className='flex gap-10' >
                        <img
                            className='cursor-pointer'
                            onClick={() => toggleHeart(phone.id)}
                            src={heart[phone.id] ? redHeart : heartt}
                            alt="heart"
                          />
                        {phone.inStock ? (
                        inCart[phone.id] ? (
                          <button
                            onClick={() => {
                              handleClick(phone.id);
                              removeFromCart(phone.id);
                            }}
                            className='buttonremove'
                          >
                            Видалити з корзини
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              addBasket(phone.id);
                              handleClick(phone.id);
                            }}
                            className='button'
                          >
                            В корзину
                          </button>
                        )
                      ) : (
                        <button className='buttonfalse'>Сповістити про наявність</button>
                      )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
             )}   
        </div>
      </div>
  )
}

export default CatalogWithFilters
