import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-[#6C63FF] py-5 text-white'>
        <div className=' flex justify-center items-center gap-14  p-2'>
            <NavLink classname="text-[30px] font-semibold " to="/signup"> Sign Up</NavLink>
            <NavLink classname="text-[30px] font-semibold " to="/login"> Login</NavLink>
        </div>
    </div>
  )
}

export default Home