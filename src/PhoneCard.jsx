import React from 'react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import phones from './phones'
import backBlack from './png/backblack.svg'
import { Link } from 'react-router-dom'
import PhoneCardNavigate from './componentsPhoneCar/PhoneCardNavigate'


const PhoneCard = () => {
  const {id} = useParams();
  const phone = phones.find((p) => p.id === parseInt(id));

  return (
    <div className='flex flex-col justify-center items-center' >
        <Header/>        
        <div className=' mt-36 w-[90%] flex flex-col gap-8 ' >
          <PhoneCardNavigate/>
        </div>
        
    </div>
  )
}

export default PhoneCard