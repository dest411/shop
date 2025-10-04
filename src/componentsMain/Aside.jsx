import React, { useState } from 'react'
import '../cssInfo/MainCatalog.css'

const Aside = () => {
  const [selectredMemory, setSelectredMemory] = useState ([]);
  const target = (event) => {
    const value = event.target.value;
    
    if (selectredMemory.includes(value)) {
      setSelectredMemory(selectredMemory.filter(v => v !== value))
    }else{
      setSelectredMemory([...selectredMemory, value])
    }
    
  }
  console.log(selectredMemory);
  
  return (
    <div>
        <aside className='rounded-sm flex flex-col gap-8 h-auto' >
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
                <label><input onChange={target} checked={selectredMemory.includes("512GB")} type="checkbox" name="memory" value="512GB" className='' /> 512GB</label>
                <label><input onChange={target} checked={selectredMemory.includes("256GB")} type="checkbox" name="memory" value="256GB" /> 256GB</label>
                <label><input onChange={target} checked={selectredMemory.includes("128GB")} type="checkbox" name="memory" value="128GB" /> 128GB</label>
                <label><input onChange={target} checked={selectredMemory.includes("64GB")} type="checkbox" name="memory" value="64GB" /> 64GB</label>
                <label><input onChange={target} checked={selectredMemory.includes("32GB")} type="checkbox" name="memory" value="32GB" /> 32GB</label>
                <p className='text-blue-700 cursor-pointer'>Ще</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p>Оперативна пам'ять</p>
              <div className='flex flex-col gap-1' >
                <label><input type="checkbox" name="memory" value="512GB" /> 1GB</label>
                <label><input type="checkbox" name="memory" value="256GB" /> 1.5GB</label>
                <label><input type="checkbox" name="memory" value="128GB" /> 2GB</label>
                <label><input type="checkbox" name="memory" value="128GB" /> 4GB</label>
                <label><input type="checkbox" name="memory" value="128GB" /> 6GB</label>
                <p className='text-blue-700 cursor-pointer'>Ще</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p>Торгова марка</p>
              <div className='flex flex-col gap-1' >
                <label><input type="checkbox" name="memory" value="512GB" /> Apple</label>
                <label><input type="checkbox" name="memory" value="256GB" /> Samsung</label>
                <label><input type="checkbox" name="memory" value="128GB" /> Xiaomi</label>
                <label><input type="checkbox" name="memory" value="64GB" /> Realme</label>
                <label><input type="checkbox" name="memory" value="32GB" /> Oppo</label>
                <p className='text-blue-700 cursor-pointer'>Ще</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p>Кількість ядер</p>
              <div className='flex flex-col gap-1' >
                <label><input type="checkbox" name="memory" value="512GB" /> 8</label>
                <label><input type="checkbox" name="memory" value="256GB" /> 6</label>
                <label><input type="checkbox" name="memory" value="128GB" /> 5</label>
              </div>
            </div>
            <p className='text-blue-700 cursor-pointer' >Всі фільтри</p>
      </aside>
    </div>
  )
}

export default Aside