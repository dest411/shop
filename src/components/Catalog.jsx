import React from 'react'
import '../css/Catalog.css'
import image1 from '../png/image 1.png'

const Catalog = () => {
  return (
    <div className='catalog' >
        <h6>Каталог</h6>
        <div>
            <div className='catalog-list' >
                <div className='item' >
                    <div className='backg' >
                        <img src={image1} alt="" />
                    </div>
                    <p>Смартфони</p>
                </div>
                <div className='item' >
                    <div className='backg' ></div>
                    <p>Ноутбуки</p>
                </div>
                <div className='item' >
                    <div className='backg' ></div>
                    <p>Комп'ютери</p>
                </div>
                <div className='item' >
                    <div className='backg' ></div>
                    <p>Телевізори</p>
                </div>
                <div className='item' >
                    <div className='backg' ></div>
                    <p>Планшети</p>
                </div>
                <div className='item' >
                    <div className='backg' ></div>
                    <p>Колонки</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Catalog