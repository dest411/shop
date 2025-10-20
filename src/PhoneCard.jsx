import React from 'react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import phones from './phones'
import backBlack from './png/backblack.svg'
import { Link } from 'react-router-dom'


const PhoneCard = () => {
  const {id} = useParams();
  const phone = phones.find((p) => p.id === parseInt(id));

  return (
    <div className='flex flex-col justify-center items-center' >
        <Header/>        
        <div className=' mt-36 w-[90%] flex flex-col gap-8 ' >
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
        
    </div>
  )
}

export default PhoneCard