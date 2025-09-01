import React from 'react'
import '../css/Header.css'
import search from '../png/icon search.svg'
import catalog from '../png/icon catalog.svg'
import basket from '../png/icon basket.svg'
import profile from '../png/icon profile.svg'

const Header = () => {
  return (
    <div className='header' >
        <div className='logo' >
            <h1 className='logo-h1' >GLANCE</h1>
        </div>
        <div className='input' >
            <img src={search} alt="" />
            <input type="text" placeholder='Пошук' />
        </div>
        <div className='navUser' >
            <div>
                <img src={catalog} alt="" />
                <p>Каталог</p>
            </div>
            <div>
                <img src={basket} alt="" />
                <p>Кошик</p>
            </div>
            <div>
                <img src={profile} alt="" />
                <p>Профіль</p>
            </div>
        </div>
    </div>
  )
}

export default Header