import React from 'react'
import '../css/Shares.css'
import column from '../png/column.png'

const Shares = () => {
  return (
    <div className='shares' >
      <div className='shares-text' >
        <p className='f' >Розумна колонка</p>
        <p className='t' >Знижка 30%</p>
        <p className='th' >при купівлі другого товара</p>
      </div>
      <div>
        <img src={column} alt="" />
      </div>
    </div>
  )
}

export default Shares