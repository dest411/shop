import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../cssInfo/Info.css'
import backBlack from '../png/backblack.svg'
// import arrows1 from '../png/arrows/Vector 4.svg'
// import arrows2 from '../png/arrows/Vector 5.svg'
import black4squares from '../png/sort/black/black4square.svg'
import white3lines from '../png/sort/white/white3lines.svg'
import white4squares from '../png/sort/white/white4square.svg'
import black3lines from '../png/sort/black/black3lines.svg'



const Info = ({setSortType, viewfilter, setViewFilter }) => {

    const [activeSort, setActiveSort] = useState('sales');


  return (
    <div className='info'  >
        <div className='linkTo' >
            <Link to="/" style={{ textDecoration: 'none', color: 'black', opacity: "60%" }} >Головна / </Link>
            <p>Смартфони</p>
        </div>
        <div className='titleInfo' >
            <Link to="/App" style={{ textDecoration: 'none', color: 'black', display:'flex', gap:"15px", alignItems: 'center' }} >
                <img src={backBlack} alt="" />
                <h6>Смартфони</h6>
            </Link>
        </div>
        <div className='filter' >
            <div className='flex gap-9' >
                <h1>Сортування</h1>
                <div className='flex gap-3  cursor-pointer' >
                    <p  className={`${activeSort === 'sales' && 'text-orange-600' }`}
                        onClick={() => {  
                            setSortType('sales'); 
                            setActiveSort('sales')}} >за популярністю</p>
                    <p  className={`${activeSort === 'cheap' && 'text-orange-600' }`}
                        onClick={() => { 
                            setSortType('cheap'); 
                            setActiveSort('cheap')}} >від дешевих до дорогих</p>
                    <p  className={`${activeSort === 'expensive' && 'text-orange-600' }`} 
                        onClick={() => { 
                            setSortType('expensive'); 
                            setActiveSort('expensive')}} >від дорогих до дешевих</p> 
                </div>
                
            </div>
            <div className='view' >
                {viewfilter ? (
                    <>
                        <img src={black4squares} alt="" />
                        <img onClick={() => setViewFilter(false) }  src={white3lines} alt="" />
                    </>
                ):(
                    <>
                        <img onClick={() => setViewFilter(true)} src={white4squares} alt="" />
                        <img src={black3lines} alt="" />
                    </>
                )}
            </div>
            
        </div>
    </div>
  )
}

export default Info