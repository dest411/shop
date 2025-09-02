import React from 'react'
import '../css/Catalog.css'
import backblack from '../png/backblack.svg'
import image1 from '../png/image 1.png';
import image2 from '../png/image 2.png';
import image3 from '../png/image 3.png';
import image4 from '../png/image 4.png';
import image5 from '../png/image 5.png';
import image6 from '../png/image 6.png';



const Catalog = () => {
  return (
    <div className='catalog' >
        <div className='text' >
          <h6>Каталог</h6>  
        </div>
        <div className='catalog-list' >
            
            <div className='item' >
                <div className='backg' >
                    <img  src={image1} alt="" />
                </div>
                <p>Смартфони</p>
            </div>
            <div className='item' >
                <div className='backg' >
                    <img src={image2} alt="image5" />
                </div>
                <p>Ноутбуки</p>
            </div>
            <div className='item' >
                <div className='backg' >
                    <img src={image3} alt="image6" />
                </div>
                <p>Комп'ютери</p>
            </div>
            <div className='item' >
                <div className='backg' >
                    <img src={image4} alt="image6" />
                </div>
                <p>Телевізори</p>
            </div>
            <div className='item' >
                <div className='backg' >
                    <img src={image5} alt="image6" />
                </div>
                <p>Планшети</p>
            </div>
            <div className='item' >
                <div className='backg' >
                    <img src={image6} alt="image6" />
                </div>
                <p>Колонки</p>
            </div>
            <img src={backblack} className='backr'  alt="" />
        </div>
            
        
    </div>
  )
}

export default Catalog