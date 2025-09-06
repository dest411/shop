import React from 'react'
import { Link } from 'react-router-dom'
import '../cssInfo/Info.css'
import backBlack from '../png/backblack.svg'
import arrows1 from '../png/arrows/Vector 4.svg'
import arrows2 from '../png/arrows/Vector 5.svg'
import black4squares from '../png/sort/black/black4square.svg'
import white3lines from '../png/sort/white/white3lines.svg'

const Info = () => {
  return (
    <div className='info'  >
        <div className='linkTo' >
            <Link to="/App" style={{ textDecoration: 'none', color: 'black', opacity: "60%" }} >Головна / </Link>
            <p>Смартфони</p>
        </div>
        <div className='titleInfo' >
            <Link to="/App" style={{ textDecoration: 'none', color: 'black', display:'flex', gap:"15px", alignItems: 'center' }} >
                <img src={backBlack} alt="" />
                <h6>Смартфони</h6>
            </Link>
        </div>
        <div className='filter' >
            <div className='sort' >
                <div className='sortImg' >
                    <img src={arrows2} alt="" />
                    <img src={arrows1} alt="" />  
                </div>
                
                <p>За популярністю</p> 
            </div>
            <div className='view' >
                <img src={black4squares} alt="" />
                <img src={white3lines} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Info