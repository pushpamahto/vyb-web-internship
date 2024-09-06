import React from 'react'
import homebanner from '../assets/homebanner.png'
import homeicons1 from '../assets/homeicons1.png'
import homeicons2 from '../assets/homeicons2.png'
import homeicons3 from '../assets/homeicons3.png'
import homeicons4 from '../assets/homeicons4.png'

export const Heroban = () => {
  return (
   <>
   
   <div className='max-w-[1220px] mx-auto mt-5'>
     <div className='bg-white'><img src={homebanner} alt="" /></div>
       <div className="hero-section shadow-lg rounded-lg bg-[#FFFFFF] border-2 border-[#fff3f3] px-4 grid grid-cols-2 md:grid-cols-4 items-center place-content-center py-4 gap-2">
          <div className="Travel border-r border-black">
            <div className='p-2 lg:p-7 text-center'>
               <div className='w-full text-center flex justify-center'> <img src={homeicons1} alt=""  /></div>
               <h3 className='text-[18px] lg:text-[27px] text-black font-bold px-4 lg:px-8'>TravelI tinerary</h3> 
            </div>
          </div>
          <div className="custom border-r border-black text-center">
            <div className='p-2 lg:p-7 text-center'>
              <div className='w-full text-center flex justify-center'><img src={homeicons2} alt="" /></div>
              <h3 className='text-[18px] lg:text-[27px] text-black font-bold px-4 lg:px-8'>Custom Merchandise</h3>
            </div>
         </div>
          <div className="digital-content border-r border-black">
            <div className="p-2 lg:p-7 text-center">
            <div className='w-full text-center flex justify-center'><img src={homeicons3} alt="" /></div>
              <h3 className='text-[18px] lg:text-[27px] text-black font-bold px-4 lg:px-8'>Digital Content</h3>
            </div>
           </div>
          <div className="Fashion">
              <div className="p-2 lg:p-7 text-center">
               <div className='w-full text-center flex justify-center'><img src={homeicons4} alt="" /></div>
                <h3 className='text-[18px] lg:text-[27px] text-black font-bold px-4 lg:px-8'>Fashion Brand</h3>
              </div>
         </div>
        </div>
    </div>
   </>
  )
}
