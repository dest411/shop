import React from 'react'
import '../css/Header.css'
import search from '../png/icon search.svg'
import catalog from '../png/icon catalog.svg'
import basket from '../png/icon basket.svg'
import profile from '../png/icon profile.svg'

const Header = (cartCount) => {
  return (
    <div>
        <div className='header' >
            <div className='logo' >
                <h1 className='logo-h1' >GLANCE</h1>
            </div>
            <div className='input' >
                <img src={search} alt="" />
                <input className='input-type' type="text" placeholder='Пошук' />
            </div>
            <div className='navUser' >
                <div className='liUser' >
                    <img src={catalog} alt="" />
                    <h3>Каталог</h3>
                </div>
                <div className='liUser' >
                    {cartCount > 0 && (
                        <span className='cart-count' >{cartCount}</span>
                    )}
                    <img className='basket' src={basket} alt="" />
                    <h3>Кошик</h3>
                </div>
                <div className='liUser' >
                    <img src={profile} alt="" />
                    <h3>Профіль</h3>
                </div>
            </div>
        </div>
        <hr className='vertical-hr'  />
    </div>
    
    
  )
}

export default Header