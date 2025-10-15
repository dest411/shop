import '../cssInfo/MainCatalog.css'

const Aside = ({ filters, setFilters, priceLow, setPriceLow, priceHigh, setPriceHigh}) => {

  const handleChange = (type) => (event) => {
    const value = event.target.value
    if (filters[type].includes(value)) {
      setFilters({ ...filters, [type]: filters[type].filter(v => v !== value) })
    } else {
      setFilters({ ...filters, [type]: [...filters[type], value] })
    }
  }
  const changePriceLow = (event) => {
    const value = event.target.value;
    setPriceLow(value);
  };

  const changePriceHigh = (event) => {
    const value = event.target.value;
    setPriceHigh(value);
  };

  

  return (
    <aside className='rounded-sm flex flex-col gap-8 h-auto'>
      <div>
        <p>Ціна, грн</p>
        <div className='asideinput flex justify-between items-center mt-3'>
          <input 
            type="text" 
            onChange={changePriceLow}
            placeholder='від'
            className='border px-2 py-5 bg-lightBlue text-black rounded-lg
               placeholder-black/70 focus:border-blue-400 outline-0 
               transition-colors duration-300' 
          />
          <span className='w-40 h-[1px] bg-black/20'></span>
          <input 
            type="text" 
            onChange={changePriceHigh}
            placeholder='до'
            className='border px-2 py-5 bg-lightBlue text-black rounded-lg
               placeholder-black/70 focus:border-blue-400 outline-0 
               transition-colors duration-300' 
            />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p>Вбудована пам'ять</p>
        <div className='flex flex-col gap-1'>
          {["512GB","256GB","128GB","64GB","32GB"].map(val => (
            <label key={val}>
              <input type="checkbox" value={val} checked={filters.memory.includes(val)} onChange={handleChange("memory")} /> {val}
            </label>
          ))}
          <p className='text-blue-700 cursor-pointer'>Ще</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p>Оперативна пам'ять</p>
        <div className='flex flex-col gap-1'>
          {["1GB","1.5GB","2GB","4GB","6GB"].map(val => (
            <label key={val}>
              <input type="checkbox" value={val} checked={filters.ram.includes(val)} onChange={handleChange("ram")} /> {val}
            </label>
          ))}
          <p className='text-blue-700 cursor-pointer'>Ще</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p>Торгова марка</p>
        <div className='flex flex-col gap-1'>
          {["Apple","Samsung","Xiaomi","Realme","Oppo"].map(val => (
            <label key={val}>
              <input type="checkbox" value={val} checked={filters.brand.includes(val)} onChange={handleChange("brand")} /> {val}
            </label>
          ))}
          <p className='text-blue-700 cursor-pointer'>Ще</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p>Кількість ядер</p>
        <div className='flex flex-col gap-1'>
          {["8","6","5"].map(val => (
            <label key={val}>
              <input type="checkbox" value={val} checked={filters.cores.includes(val)} onChange={handleChange("cores")} /> {val}
            </label>
          ))}
        </div>
      </div>

      <p className='text-blue-700 cursor-pointer'>Всі фільтри</p>
    </aside>
  )
}

export default Aside
