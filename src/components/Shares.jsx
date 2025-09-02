import React from 'react'
import '../css/Shares.css'
import column from '../png/column.png'
import back from '../png/back.svg'

const Shares = () => {
  return (
    <div className='shares' >
      <div className='shares-text' >
        <p className='f' >Розумна колонка</p><br />
        <p className='t' >ЗНИЖКА 30%</p>
        <p className='th' >при купівлі другого товара</p>
      </div>
      <div>
        <img src={column} alt="" />
      </div>
      <img className='backleft' src={back} alt="" />
      <img className='backright' src={back} alt="" />

    </div>
  )
}

export default Shares