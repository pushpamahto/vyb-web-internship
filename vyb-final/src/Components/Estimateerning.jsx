import React from 'react'

export const Estimateerning = () => {
  return (
    <>
    <div className="estimates-erning main-slider bg-[#E5F0F1] py-5 mt-5">
    <h3 className=' text-[18px] md:text-[27px] text-center'>ESTIMATE EARNING POTENTIAL</h3>
       <div className="main md:flex gap-5 px-6 md:px-36 my-5">
         <div className="leftbx md:w-1/2">
         <p className='text-[18px]'>How many followers do you have?</p>
            <div>
            <div className="progress">
                <div className="bg-progress bg-[#003c3c] w-7 h-5"></div>
                <div className="progress-bor border-1 border-black w-full bg-white"></div>
            </div>
             <button className='text-[#003c3c] text-[18px] font-bold'>10K</button>
            </div>
         </div>
         <div className="rightbox md:w-1/2 text-center">
            <p className='text-[22px] text-black font-bold'>Monthly Earning</p>
            <h3 className='text-[24px] md:text-[40px] text-[#003c3c]'>₹15000</h3>
         </div>
       </div>
       <div className="main md:flex gap-5 px-6 md:px-36 my-5">
         <div className="leftbx md:w-1/2">
         <p className='text-[18px]'>How many products do you list monthly?</p>
            <div>
            <div className="progress">
                <div className="bg-progress bg-[#003c3c] w-7 h-5"></div>
                <div className="progress-bor border-1 border-black w-full bg-white"></div>
            </div>
             <button className='text-[#003c3c] text-[18px] font-bold'>1K</button>
            </div>
         </div>
         <div className="rightbox md:w-1/2 text-center">
            <p className='text-[22px] text-black font-bold'>Monthly Earning</p>
            <h3 className='text-[24px] md:text-[40px] text-[#003c3c]'>₹18000</h3>
         </div>
       </div>
    </div>
    
    </>
  )
}
