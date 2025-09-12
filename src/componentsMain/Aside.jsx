import React from 'react'
import '../cssInfo/MainCatalog.css'

const Aside = () => {
  return (
    <div>
        <aside>
            <div>
                <p>Ціна, грн</p>
                <div className='asideinput' >
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>
      </aside>
    </div>
  )
}

export default Aside