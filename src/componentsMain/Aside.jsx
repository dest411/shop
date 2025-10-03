import React from 'react'
import '../cssInfo/MainCatalog.css'

const Aside = () => {
  return (
    <div>
        <aside className='rounded-sm' >
            <div>
                <p>Ціна, грн</p>
                <div className='asideinput flex justify-between items-center mt-3' >
                    <input type="text" placeholder='від'  className='
                       border px-2 py-5 bg-lightBlue text-black 
                      rounded-lg placeholder-black/70 focus:border-blue-400 outline-0 transition-colors duration-300'   />
                      <span className='w-40 h-[1px] bg-black/20' ></span>
                    <input type="text" placeholder='до' className='
                      border px-2 py-5 bg-lightBlue text-black 
                      rounded-lg placeholder-black/70 focus:border-blue-400 outline-0 transition-colors duration-300'/>
                </div>
            </div>
      </aside>
    </div>
  )
}

export default Aside