import React from 'react';
import loginimg from '../assets/loginimg.png';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="mainform my-8 mx-4 md:mx-0">
      <div className="main-parent max-w-[850px] mx-auto md:flex items-center gap-5">
        <div className="left w-full md:w-1/2">
          <img src={loginimg} alt="Login" />
        </div>
        <div className="right w-full md:w-1/2">
          <form action="">
            <h3 className="text-[22px] md:text-[27px] text-green-800 font-bold my-3">Login</h3>
            <div className="mb-3">
              <label htmlFor="" className="text-[18px] md:text-[27px] text-black font-bold">E-mail</label>
              <input type="email" className="w-full shadow-sm border-1 border-black h-10 rounded-lg" placeholder="Enter E-mail" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="text-[18px] md:text-[27px] text-black font-bold">Password</label>
              <input type="password" className="w-full shadow-sm border-1 border-black h-10 rounded-lg" placeholder="Enter Password" />
            </div>

            <div className="login my-3">
              <button className="shadow-lg rounded-full bg-green-800 text-white font-bold p-2 px-10 w-[150px] mr-3 border-1 border-black">Login</button>
            </div>
            <div className="my-3">Don't have an account? <Link to='/signup'><span className="text-blue-500">Sign Up</span></Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

































