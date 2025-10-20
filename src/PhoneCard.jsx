import React from 'react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import phones from './phones'

const PhoneCard = () => {
  const {id} = useParams();
  const phone = phones.find((p) => p.id === parseInt(id));

  return (
    <div className='flex flex-col justify-center items-center' >
        <Header/>        
        <div className='bg-red-500 mt-40 w-[90%] ' >
          <h1>{phone.title}</h1>
        </div>
        
    </div>
  )
}

export default PhoneCard