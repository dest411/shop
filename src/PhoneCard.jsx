import React from 'react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import phones from './phones'

const PhoneCard = () => {
  const {id} = useParams();
  const phone = phones.find((p) => p.id === parseInt(id));

  return (
    <div className='' >
        <Header/>        
        <div className='bg-red-500 mt-40' >
          <h1>{phone.id}</h1>
        sd
        fsfds
        </div>
        
    </div>
  )
}

export default PhoneCard