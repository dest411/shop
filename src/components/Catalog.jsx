import React, {useState} from 'react'
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

    const [offset, setOffset] = useState(0);
    const itemWidth = 150 + 16; // ширина item + margin-right (mr-4)
    const containerWidth = 0.85 * window.innerWidth; // ширина видимого контейнера
    const maxOffset = catalogItems.length * itemWidth - containerWidth;

     return (
        <div className='w-[90%] bg-black/10  m-auto relative ' >
            <img src={backblack} 
                onClick={() => setOffset(prev => Math.max(prev - 300, 0))} 
                className='backr w-[30px] border-2
                    border-solid border-black rounded-[50%] 
                    absolute left-0 top-[50%] cursor-pointer
                    p-1 aspect-square rotate-180 z-0' alt="" />

            <div className='catalog overflow-hidden mx-2'  >
                <div className='text' >
                    <h6>Каталог</h6>  
                </div>
                <div className="catalog-list  transition-transform" style={{ transform: `translateX(-${offset}px)` }}>
                    {catalogItems.map(item => (
                        <div key={item.id} className="item">
                            <div className="backg">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img src={backblack} onClick={() => setOffset(prev => Math.min(prev + 300, maxOffset))} className='backr' alt="" />
        </div>
    
  )
}

export default Catalog