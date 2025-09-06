import React from 'react'
import { Link } from 'react-router-dom'
import '../cssInfo/Info.css'
import backBlack from '../png/backblack.svg'

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
    </div>
  )
}

export default Info