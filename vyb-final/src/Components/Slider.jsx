import React from 'react'
import sliderimg from '../assets/sliderimg.png'

export const Slider = () => {
  return (
    <>
    <div className="main-slider bg-[#E5F0F1] py-4 mt-5">
        <div className="topslider-conter flex flex-wrap justify-between items-center mx-8 md:mx-16">
            <div className="leftbox">
            <h1 className='text-[40px] font-bold'>Products</h1>
            </div>
            <div className="rightbox">
                <div className="main-box flex items-center gap-3">
                    <div className="select">
                        <select name="" id="" className='h-10 px-2 border-1 border-[#052e16] rounded-lg'>
                            <option>Itinerary</option>
                        </select>
                    </div>
                    <div className="button"><a href="#" className='bg-green-950 text-white rounded-lg p-2.5 text-base md:text-[18px]'>Demo Store</a></div>
                </div>
            </div>
        </div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className='main-content-slider flex-row md:flex mx-8 md:mx-40 items-center'>
          <div className='md:w-3/4'>
            <h1 className='text-[40px] font-bold'>Delhi Itinerary</h1>
            <p className='text-[16px] md:text-[18px] text-black my-3'>Delhi, India s capital territory, is a massive metropolitan area in the country s
                north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing
                Mughal era Red Fort, a symbol of India, and the sprawling Jama Masjid
                mosque, whose courtyard accommodates 25,000 people.</p>
         </div>
         <div> <img src={sliderimg} className="d-block" alt="..."/></div>
     </div>
    </div>
    <div className="carousel-item">
    <div className='main-content-slider flex-row md:flex mx-8 md:mx-40 items-center'>
          <div className='md:w-3/4'>
            <h1 className='text-[40px] font-bold'>Delhi Itinerary</h1>
            <p className='text-[16px] md:text-[18px] text-black my-3'>Delhi, India s capital territory, is a massive metropolitan area in the country s
                north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing
                Mughal era Red Fort, a symbol of India, and the sprawling Jama Masjid
                mosque, whose courtyard accommodates 25,000 people.</p>
         </div>
         <div> <img src={sliderimg} className="d-block" alt="..."/></div>
     </div>
    </div>
    <div className="carousel-item">
    <div className='main-content-slider flex-row md:flex mx-8 md:mx-40 items-center'>
          <div className='md:w-3/4'>
            <h1 className='text-[40px] font-bold'>Delhi Itinerary</h1>
            <p className='text-[16px] md:text-[18px] text-black my-3'>Delhi, India s capital territory, is a massive metropolitan area in the country s
                north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing
                Mughal era Red Fort, a symbol of India, and the sprawling Jama Masjid
                mosque, whose courtyard accommodates 25,000 people.</p>
         </div>
         <div> <img src={sliderimg} className="d-block" alt="..."/></div>
     </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
    </>
  )
}























                          
