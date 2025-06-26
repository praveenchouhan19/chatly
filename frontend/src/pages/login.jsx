import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  let navigate = useNavigate();
  let [show, setshow] = useState(false)
  return (
    <div className='w-full h-[100vh] bg-slate-200 flex items-center justify-center'>
      <div className='w-full max-w-[500px] h-[600px] bg-white rounded-lg shadow-gray-400 shadow-lg flex flex-col gap-[30px]'>
        <div className='w-full h-[200px] bg-[#20c7ff] rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center'>
          <h1 className='text-gray-600 font-bold text-[30px]'>
            Login to <span className='text-white'>chatly</span>
          </h1>
        </div>
        <form className="w-full flex flex-col gap-[20px] items-center">
          <input
            type="email"
            placeholder="email"
            className="w-[90%] h-[50px] outline-none border-2 border-[#20c7ff] px-[20px] py-[10px] bg-white rounded-lg shadow-lg text-gray-700 text-[19px]"
          />

            <div className="w-[90%] h-[50px] border-2 border-[#20c7ff] overflow-hidden rounded-lg shadow-lg relative">
            <input
                type={show ? "text" : "password"}
                placeholder="password"
                className="w-full h-full outline-none px-[20px] py-[10px] bg-white text-gray-700 text-[19px]"
            />
            <span
                className="absolute top-[12px] right-[20px] text-[20px] text-[#20c7ff] font-semibold cursor-pointer"
                onClick={() => setshow(prev => !prev)}
            >
                {show ? "hidden" : "show"}
            </span>
            </div>

          <button
            className="px-[20px] py-[10px] bg-[#20c7ff] rounded-2xl shadow-gray-400 shadow-lg text-[20px] w-[200px] mt-[20px] font-semibold hover:shadow-inner"
          >
            Login
          </button>

          <p className="cursor-pointer" onClick={() => navigate("/signup")}>
            Want to create a new account?{' '}
            <span className="text-[#20c7ff] font-bold">Signin</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login
