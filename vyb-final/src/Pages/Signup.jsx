
// import React from 'react';
// import loginimg from '../assets/loginimg.png'; 

// export const Signup = () => {
//   return (
//     <div className="mainform my-8 mx-4 md:mx-0">
//       <div className="main-parent max-w-[850px] mx-auto md:flex items-center gap-5">
//         <div className="left w-full md:w-1/2">
          
//           <img src={loginimg} alt="Signup Illustration" />
//         </div>
//         <div className="right w-full md:w-1/2">
//           <form action="">
//             <h3 className="text-[22px] md:text-[27px]  font-bold my-3 text-green-800">Sign Up</h3>
//             <div className="mb-3">
//               <label htmlFor="fullname" className="text-[18px] md:text-[27px] text-black font-bold">Fullname</label>
//               <input type="text" id="fullname" className="w-full shadow-sm border border-black h-10 rounded-lg" placeholder="Enter your FullName" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="text-[18px] md:text-[27px] text-black font-bold">E-mail</label>
//               <input type="email" id="email" className="w-full shadow-sm border border-black h-10 rounded-lg" placeholder="Enter E-mail" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="text-[18px] md:text-[27px] text-black font-bold">Password</label>
//               <input type="password" id="password" className="w-full shadow-sm border border-black h-10 rounded-lg" placeholder="Enter Password" />
//             </div>

//             <div className="are-you text-center my-3">
//               <h3>Are You A Creator?</h3>
//               <div className="mail flex justify-center items-center gap-3 my-2">
//                 <button type="button" className="shadow-lg rounded-md bg-white text-black text-[18px] font-bold px-3 py-2">Yes</button>
//                 <button type="button" className="shadow-lg rounded-md bg-white text-black text-[18px] font-bold px-3 py-2">No</button>
//               </div>
//             </div>

            
//             <div className="login my-3">
//               <button type="submit" className="shadow-lg rounded-full bg-green-900 text-white  font-bold p-2 px-10 w-[150px] mr-3 border border-black hover:bg-green-600">Sign Up</button>
//             </div>
//             <div className="my-3">
//               Already have an account? <a href="/login" className="text-blue-500">Login</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };





























import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimg from '../assets/loginimg.png'; 

export const Signup = () => {
  const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
 
    localStorage.setItem('userData', JSON.stringify(formData));
  
    navigate('/login');
  };

  return (
    <div className="mainform my-8 mx-4 md:mx-0">
      <div className="main-parent max-w-[850px] mx-auto md:flex items-center gap-5">
        <div className="left w-full md:w-1/2">
          <img src={loginimg} alt="Signup Illustration" />
        </div>
        <div className="right w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <h3 className="text-[22px] md:text-[27px] font-bold my-3 text-green-800">Sign Up</h3>
            <div className="mb-3">
              <label htmlFor="fullname" className="text-[18px] md:text-[27px] text-black font-bold">Fullname</label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full shadow-sm border border-black h-10 rounded-lg"
                placeholder="Enter your FullName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-[18px] md:text-[27px] text-black font-bold">E-mail</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full shadow-sm border border-black h-10 rounded-lg"
                placeholder="Enter E-mail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-[18px] md:text-[27px] text-black font-bold">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full shadow-sm border border-black h-10 rounded-lg"
                placeholder="Enter Password"
              />
            </div>

            <div className="are-you text-center my-3">
              <h3>Are You A Creator?</h3>
              <div className="mail flex justify-center items-center gap-3 my-2">
                <button type="button" className="shadow-lg rounded-md bg-white text-black text-[18px] font-bold px-3 py-2">Yes</button>
                <button type="button" className="shadow-lg rounded-md bg-white text-black text-[18px] font-bold px-3 py-2">No</button>
              </div>
            </div>

            <div className="login my-3">
              <button type="submit" className="shadow-lg rounded-full bg-green-900 text-white font-bold p-2 px-10 w-[150px] mr-3 border border-black hover:bg-green-600">Sign Up</button>
            </div>
            <div className="my-3">
              Already have an account? <a href="/login" className="text-blue-500">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
