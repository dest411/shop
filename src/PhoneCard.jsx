import React from 'react'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
import phones from './phones'
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
            <div className=' flex flex-col items-start py-4'  >

              <p className='text-3xl font-medium' >{phone.title}</p>
              <p className='text-[20px] mt-4' >Колір: {phone.color}</p>
              <p className='mt-5 text-xl font-medium' >Характеристики: </p>
              <div className='text-black/70 mt-3 flex flex-col text-lg gap-1' >
                <p>Бренд: {phone.brand}</p>
                <p>Пам'ять: {phone.memory} </p>
                <p>Оперативна пам'ять: {phone.ram}</p>
                <p>Кількість ядер: {phone.cores}</p>
              </div>
              <p className='mt-5 text-lg cursor-pointer text-blue-700'>Всі характерики</p>
              
            </div>
            <div className=' flex flex-col items-start py-4' >
              <div className='bg-[#E7E7ED] p-8 rounded-xl'>
                <p className='text-2xl font-bold'>{phone.price}</p>
                <button className='button'>В корзину</button>
              </div>
              
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default PhoneCard