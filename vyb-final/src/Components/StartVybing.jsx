import React from 'react'
import mobile2 from '../assets/mobile2.png'
import mobile1 from '../assets/mobile1.png'
import mobile3 from '../assets/mobile3.png'
import mobile4 from '../assets/mobile4.png'

export const StartVybing = () => {
  return (
    <>
    <div className="main-vybing mt-12">
        <div className="parent lg:flex px-6 lg:px-40 gap-5">
            <div className="left-box w-full lg:w-[40%] my-5 overflow: auto">
                <div className="card bg-[#003c3c] rounded-2xl text-white p-4 sticky top-12">
                 <h3 className='text-[18px] lg:text-[27px] font-bold'>Start Vybing with us!</h3>
                 <p>"We help influencers make money by monetizing
                    their travel plans, merchandise, and digital goods
                    and many more.</p>
                    <button className='bg-[#00dc82] w-[140px] py-3 mt-2 rounded-lg text-[20px] md:text-[24px] text-black font-medium'>Join Us</button>
                </div>
            </div>
            <div className="right-box lg:w-[60%]">
                <div className="main flex gap-4">
                    <div className="left-b">
                        <div className='bg-[#003c3c] text-white text-[18px] rounded-md shadow-md w-14 p-2 py-3 text-center'>1</div>
                        <div className='w-1 bg-[#ddd] h-screen lg:h-[90vh] text-center mx-auto p-0 my-0'></div>
                    </div>
                    <div className="rightb0 my-4 lg:my-0">
                        <div className="main-img bg-[#e5f0f1] p-4 py-5 rounded-lg">
                         <h2 className='text-black text-[16px] lg:text-[22px] font-bold'>Sign Up and create your own store hassle free.</h2>
                         <p className='py-4'>Join us via google signin and verify your influencer status by
                            entering you social media Id and unlock your store @ zero
                            cost.</p>
                            <div className='flex justify-center'> <img src={mobile2} alt="" className='object-contain w-fit' /> </div>
                        </div>
                    </div>
                </div>
                <div className="main flex gap-4">
                    <div className="left-b">
                        <div className='bg-[#003c3c] text-white text-[18px] rounded-md shadow-md w-14 p-2 py-3 text-center'>2</div>
                        <div className='w-1 bg-[#ddd] h-screen lg:h-[90vh] text-center mx-auto p-0 my-0'></div>
                    </div>
                    <div className="rightb0 my-4 lg:my-0">
                        <div className="main-img bg-[#e5f0f1] p-4 py-5 rounded-lg">
                         <h2 className='text-black text-[16px] lg:text-[22px] font-bold'>Build & customize your store front.</h2>
                         <p className='py-4'>Simply fill in the details to build your digital store. Once done, start selling your products to your audience.</p>
                            <div className='flex justify-center'> <img src={mobile1} alt="" className='object-contain w-fit' /> </div>
                        </div>
                    </div>
                </div>
                <div className="main flex gap-4">
                    <div className="left-b">
                        <div className='bg-[#003c3c] text-white text-[18px] rounded-md shadow-md w-14 p-2 py-3 text-center'>3</div>
                        <div className='w-1 bg-[#ddd] h-screen lg:h-[90vh] text-center mx-auto p-0 my-0'></div>
                    </div>
                    <div className="rightb0 my-4 lg:my-0">
                        <div className="main-img bg-[#e5f0f1] p-4 py-5 rounded-lg">
                         <h2 className='text-black text-[16px] lg:text-[22px] font-bold'>Call the audience to your store. Easily integrate links into content.</h2>
                         <p className='py-4'>After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together !</p>
                            <div className='flex justify-center'> <img src={mobile3} alt="" className='object-contain w-fit' /> </div>
                        </div>
                    </div>
                </div>
                <div className="main flex gap-4">
                    <div className="left-b">
                        <div className='bg-[#003c3c] text-white text-[18px] rounded-md shadow-md w-14 p-2 py-3 text-center'>4</div>
                        <div className='w-1 bg-[#ddd] h-screen lg:h-[90vh] text-center mx-auto p-0 my-0'></div>
                    </div>
                    <div className="rightb0 my-4 lg:my-0">
                        <div className="main-img bg-[#e5f0f1] p-4 py-5 rounded-lg">
                         <h2 className='text-black text-[16px] lg:text-[22px] font-bold'>"Monetize your influencer status: Earn money adding real value to your true followers!"</h2>
                         <p className='py-4'>Let VYB the money now !! It's here and withdraw it periodically</p>
                            <div className='flex justify-center'> <img src={mobile4} alt="" className='object-contain w-fit' /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
