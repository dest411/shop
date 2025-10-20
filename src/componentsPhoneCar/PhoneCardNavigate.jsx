import React from 'react'
import { Link } from 'react-router-dom'
import backBlack from '../png/backblack.svg'

const PhoneCardNavigate = () => {
  return (
    <div className='flex gap-5 flex-col'>
        <div className='flex gap-2'>
            <Link className=' opacity-60' to="/"  >Головна / </Link>
            <Link className=' opacity-60' to="/CatalogMain" ><h6>Смартфони /</h6></Link>
            <Link to="/" ><h6>Карточка товару</h6></Link>
        </div>
        <div className=''>
            <Link className='text-3xl flex gap-5' to="/CatalogMain" >
                <img src={backBlack} className=' scale-125 transform -rotate-180 -' alt="" />
                <h6>Смартфони </h6>
            </Link>
        </div>
    </div>
  )
}

export default PhoneCardNavigate