import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import LoginIllus from "./Assests/images/login.svg";
import { useAuth } from "./Context";

const Login = () => {

    const [loading,setLoading]=useState(false);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [error,setError]=useState();

    const {Loginfuntion} =useAuth();
    const navigate= useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

       
        try {
            setError(" ");
            setLoading(true);
            await Loginfuntion(email,password);
            navigate("/")
            
        } catch (error) {
            setLoading(false);
            setError("Login failed...");
            
        }

    }


  return (
    <div>
      <div className=" container mx-auto m-8 mt-10">
        <h1 className="text-[35px]  font-bold text-[#6C63FF] mb-3">
          Please Login Your Account
        </h1>
        <p className=" text-[18px] font-semibold text-gray-700 ">
          Fill in the details below to Login your account
        </p>
        <div className=" flex justify-center items-center mt-3 ">
          <div className=" max-w-[30%] mt-8">
            <img className=" w-[70%]" src={LoginIllus} alt="" />
          </div>
          <div className=" w-[40%] mr-24">
            <form action="" className=" flex flex-col m-2 p-3 text-zinc-700" onSubmit={handleSubmit}>
              <input
                className=" m-3 p-3 placeholder:text-[18px] focus:outline-none border rounded-md border-gray-300 text-[16px] font-medium "
                type="email"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className=" m-3 p-3 placeholder:text-[18px] focus:outline-none border rounded-md border-gray-300 text-[16px] font-medium "
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button
                type="submit"
                className=" w-[100%] text-center ml-3 bg-blue-800 text-white p-3
            text-[18px] hover:bg-blue-500 tracking-wide uppercase rounded-lg mt-5"
              >
                Sign Up
              </button>
              <p className=" mt-4 text-zinc-700  text-[18px]">
                Dont't have an Account ?{" "}
                <NavLink className=" text-blue-800" to="/signup">
                  Sign Up{" "}
                </NavLink>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
