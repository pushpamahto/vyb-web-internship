
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.gif';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Handle scrolling to add glass effect
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-md shadow-md' : 'bg-[#f0f0f0]'}`}>
        <div className='mx-6 max-w-[1220px] md:mx-auto rounded-full shadow-lg flex flex-col md:flex-row justify-between items-center px-3 py-1.5 mt-2'>
          <div className='flex justify-start gap-3 items-center'>
            <div className='logo'>
              <Link to="/"><img src={logo} alt="Logo" className="h-8" /></Link> {/* Adjusted logo size */}
            </div>
            <div className='search-logo'>
              <input
                type='search'
                className='h-9 w-[140px] md:w-[250px] border border-black rounded-full px-3'
                placeholder='Search...'
              />
            </div>
            <button
              className='md:hidden text-white bg-black p-1.5 rounded'
              onClick={handleMenuToggle}
              aria-label='Toggle menu'
            >
              Menu
            </button>
          </div>
          <nav>
            <ul
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } md:flex md:flex-row lg:space-x-12 p-2 m-0 absolute md:relative bg-[#f0f0f0] w-1/2 md:w-auto top-full right-0 mt-2 md:mt-0 md:bg-transparent md:top-auto md:right-auto md:p-0`}
            >
              <li className='md:mr-4'>
              <Link className='text-[16px] font-normal' to='/cart'> <i class="bi bi-cart px-1"></i>Cart</Link>
              </li>
              <li className='md:mr-4'>
                <Link className='text-[16px] font-normal' to='/about'><i class="bi bi-info-circle px-1"></i>
                About</Link>
              </li>
              <li className='md:mr-4'>
                <Link className='text-[16px] font-normal' to='/contact'> <i class="bi bi-headphones px-1"></i>
                Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="login">
            <Link to="/login" className='hidden md:block shadow-lg rounded-md bg-gray p-2 px-6 mr-2 bg-green-400 border-1 border-green-700' ><i className="bi bi-person-circle"></i></Link>
          </div>
        </div>
      </div>

      {/* Padding to avoid content overlap */}
      <div className="pt-[80px]">
        <Outlet />
      </div>
    </>
  );
};

