import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import regi_illus from "./Assests/images/undraw_reminder_522k.svg";
import { useAuth } from "./Context";

const SignUp = () => {

    const [firstname,setFirstname]= useState();
    const [lastname,setlastname]= useState();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [confirmPassword,setConfirmPassword]= useState();
    const [check,setCheck]= useState();

    const [error,setError]=useState();
    const [loading,setLoading]= useState(false);

    const { signUpfunction } =useAuth();

    const navigate= useNavigate()

    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(password!==confirmPassword){
            return setError("please Enter same password");
        }

        try {
            setError(" ");
            setLoading(true);
            await signUpfunction(email,password,firstname);
            navigate("/");
        } catch (error) {
            setLoading(false);
            setError("Sign up failed...");
            
        }

    }

  return (
    <div className=" container mx-auto m-4 h-screen">
      <h1 className="text-[35px]  font-bold text-[#6C63FF] mb-3">
        Registration
      </h1>
      <p className=" text-[18px] font-semibold text-gray-700 ">
        Fill in the details below to create an account
      </p>
      <div className=" flex justify-center items-center mt-5 ">
        <div className=" max-w-[30%] mt-8">
          <img className=" w-[70%]" src={regi_illus} alt="" />
        </div>
        <div className=" w-[40%] mr-24">
          <form action="" className=" flex flex-col m-2 p-3 text-zinc-700" 
          onSubmit={handleSubmit}
          >
            <input
              className=" m-3 p-3 placeholder:text-[18px] focus:outline-none border rounded-md border-gray-300 text-[16px] font-medium "
              type="text"
              placeholder="Enter Your Firstname"
              required
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
            />
            <input
              className=" m-3 p-3 placeholder:text-[18px] focus:outline-none border rounded-md border-gray-300 text-[16px] font-medium "
              type="text"
              placeholder="Enter Your lastname"
              required
              value={lastname}
              onChange={(e)=>setlastname(e.target.value)}
            />
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
            <input
              className=" m-3 p-3 placeholder:text-[18px] focus:outline-none border rounded-md border-gray-300 text-[16px] font-medium "
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <div className=" flex items-center text-zinc-700 gap-5 my-5 text-[18px]">
              <input
                className=" m-3 p-3 placeholder:text-[18px] focus:outline-none border rounded-md border-gray-300 text-[16px] font-medium "
                type="checkbox"
                required
                value={check}
                onChange={(e)=>setCheck(e.target.value)}
              />
              <p>
                I read and agree to the{" "}
                <span className=" text-blue-800">Terms</span> &{" "}
                <span className=" text-blue-800">Conditions</span>{" "}
              </p>
            </div>
            <button  type="submit" className=" w-[90%] text-center ml-3 bg-blue-800 text-white p-3
            text-[18px] hover:bg-blue-500 tracking-wide uppercase rounded-lg">Sign Up</button>
            {
                error && <h1>{error}</h1>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
