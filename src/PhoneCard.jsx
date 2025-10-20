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
          <div className='flex justify-between w-full h-auto' >
            <img className='w-[410px] h-[580px]' src={phone.image} alt="" />
            <div className='bg-red-300'  >
              {/* info */}
              {phone.title}
              {phone.color}
            </div>
            <div>
              {phone.price}
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default PhoneCard