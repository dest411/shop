import React from 'react'
import '../css/Discounts.css'
import huaweinovay61 from '../png/phones/huawei_nova_y61.png';
import iphone12 from '../png/phones/iphone_12_64gb.png';
import iphone14 from '../png/phones/iphone_14_128gb.png';
import iphone14pro from '../png/phones/iphone_14_pro_128gb.png';
import xiaomiredmi128gb from '../png/phones/xiaomi_redmi_128gb.png';
import heart from '../png/Vector.svg';


const phones = [
  {
    id: 1,
    title: "Смартфон Apple iPhone Pro 14 128GB",
    price: "84 999 ₴",
    oldPrice: "8 8000 ₴",
    discount: "-4%",
    image: iphone14pro,
    inStock: true,
  },
  {
    id: 2,
    title: "Смартфон Apple iPhone 12 64GB",
    price: "42 980 ₴",
    oldPrice: "47 750 ₴",
    discount: "-10%",
    image: iphone12,
    inStock: true,
  },
  {
    id: 3,
    title: "Смартфон HUAWEI nova Y61",
    price: "11 999 ₴",
    oldPrice: "14 111 ₴",
    discount: "-15%",
    image: huaweinovay61,
    inStock: true,
  },
  {
    id: 4,
    title: "Смартфон Xiaomi Redmi 128GB",
    price: "17 665 ₴",
    oldPrice: "87 999 ₴",
    discount: "-4%",
    image: xiaomiredmi128gb,
    inStock: true,
  },
  {
    id: 5,
    title: "Смартфон Apple iPhone 14 128GB",
    price: "75 999 ₴",
    oldPrice: "79 999 ₴",
    discount: "-4%",
    image: iphone14,
    inStock: false,
  },
];




const Discounts = ({addBasket, handleClick, inCart, removeFromCart}) => {
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
                          <img src={heart} alt="heart" /> {/* HEART ONCLICK  */}
                          
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