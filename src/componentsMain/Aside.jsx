import React from 'react'
import '../cssInfo/MainCatalog.css'

const Aside = () => {
  return (
    <div>
        <aside className='rounded-sm flex flex-col gap-8' >
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
            <div className='flex flex-col gap-2'>
              <p>Вбудована пам'ять</p>
              <div className='flex flex-col gap-1' >
                <label><input type="checkbox" name="memory" value="512GB" /> 512GB</label>
                <label><input type="checkbox" name="memory" value="256GB" /> 256GB</label>
                <label><input type="checkbox" name="memory" value="128GB" /> 128GB</label>
                <label><input type="checkbox" name="memory" value="64GB" /> 64GB</label>
                <label><input type="checkbox" name="memory" value="32GB" /> 32GB</label>
                <p className='text-blue-700 cursor-pointer'>Ще</p>
              </div>

            </div>
      </aside>
    </div>
  )
}

export default Aside