import React from 'react'
import '../css/Catalog.css'
import backblack from '../png/backblack.svg'
import image1 from '../png/image 1.png';
import image2 from '../png/image 2.png';
import image3 from '../png/image 3.png';
import image4 from '../png/image 4.png';
import image5 from '../png/image 5.png';
import image6 from '../png/image 6.png';

const catalogItems = [
  { id: 1, title: 'Смартфони', image: image1 },
  { id: 2, title: 'Ноутбуки', image: image2 },
  { id: 3, title: 'Комп\'ютери', image: image3 },
  { id: 4, title: 'Телевізори', image: image4 },
  { id: 5, title: 'Планшети', image: image5 },
  { id: 6, title: 'Колонки', image: image6 },
  { id: 7, title: 'Смартфони', image: image1 },
  { id: 8, title: 'Ноутбуки', image: image2 },
  { id: 9, title: 'Комп\'ютери', image: image3 },
  { id: 10, title: 'Телевізори', image: image4 },
  { id: 11, title: 'Планшети', image: image5 },
  { id: 12, title: 'Колонки', image: image6 },
];

const Catalog = () => {
  return (
    <div className='catalog' >
        <div className='text' >
          <h6>Каталог</h6>  
        </div>
        <div className="catalog-list">
            {catalogItems.map(item => (
                <div key={item.id} className="item">
                    <div className="backg">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <p>{item.title}</p>
                </div>
            ))}
            <img src={backblack} className='backr' alt="" />
        </div>
        
            
        
    </div>
  )
}

export default Catalog