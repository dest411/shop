import React from 'react'
import '../css/Shares.css'
import column from '../png/column.svg'

const Shares = () => {
  return (
    <div className='shares' >
      <div>
        <h1>Розумна колонка</h1>
        <h2>Знижка 30%</h2>
        <h3>при купівлі другого товара</h3>
      </div>
      <div>
        <img src={column} alt="" />
      </div>
    </div>
  )
}

export default Shares