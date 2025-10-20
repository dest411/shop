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
        <div className=' mt-40 w-[90%] ' >
          <div className='flex gap-2'>
            <Link to="/"  >Головна / </Link>
            <Link to="/" ><h6>Смартфони /</h6></Link>
            <Link to="/" ><h6>Карточка товару</h6></Link>

          </div>


        </div>
        
    </div>
  )
}

export default PhoneCard