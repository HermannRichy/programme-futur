import { SetStateAction, useState } from 'react';

export default function RealisationsFilter() {
  const [filterKey, setFilterKey] = useState('*');

  const handleFilterChange = (key: SetStateAction<string>) => {
    setFilterKey(key);
  };

  return (
    <section className='p-5 lg:p-10 bg-gray-300'>
      <div className="filters text-center p-2">
        <button className='px-4 py-2 mx-2 border border-[#24324d] rounded-3xl font-semibold hover:scale-110' onClick={() => handleFilterChange('*')}>All</button>
        <button className='px-4 py-2 mx-2 border border-[#24324d] rounded-3xl font-semibold hover:scale-110' onClick={() => handleFilterChange('.filter-2021')}>2021</button>
        <button className='px-4 py-2 mx-2 border border-[#24324d] rounded-3xl font-semibold hover:scale-110' onClick={() => handleFilterChange('.filter-2022')}>2022</button>
        <button className='px-4 py-2 mx-2 border border-[#24324d] rounded-3xl font-semibold hover:scale-110' onClick={() => handleFilterChange('.filter-2023')}>2023</button>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 p-2">
        <div className={`grid-item filter-2021 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-1.jpg' alt='2021'/>
        </div>
        <div className={`grid-item filter-2022 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-2.jpg' alt='2022'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-3.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-4.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-5.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-6.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-7.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-8.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-9.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2023' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2023-10.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2021 ${filterKey === '*' || filterKey === '.filter-2021' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2021-1.jpg' alt='2021'/>
        </div>
        <div className={`grid-item filter-2022 ${filterKey === '*' || filterKey === '.filter-2021' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2021-2.jpg' alt='2022'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2021' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2021-3.jpg' alt='2023'/>
        </div>
        <div className={`grid-item filter-2023 ${filterKey === '*' || filterKey === '.filter-2021' ? '' : 'hidden'}`}>
          <img className='h-80 w-full' src='/public/images/rea/rea-2021-4.jpg' alt='2023'/>
        </div>
        {/* Ajoutez plus d'éléments d'image avec les classes grid-item */}
      </div>
    </section>
  );
}
