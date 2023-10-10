import React from 'react'
import {FaArrowCircleRight, FaRegStickyNote, FaRegSun, FaTachometerAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-[teal] h-full overflow-hidden px-[25px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
            <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaTachometerAlt color='white'/>
            <Link to="/" className='text-[14px] leadig-[20px] font-bold text-white'>
           Dashboard
           </Link> 
        </div>

        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaArrowCircleRight color='white'/>
            <Link to="/allApplication" className='text-[14px] leadig-[20px] font-bold text-white'>
           All Application
           </Link>                     
        </div>

        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaRegStickyNote color='white'/>
            <Link to="/CreateApplication" className='text-[14px] leadig-[20px] font-bold text-white'>
           Create Application
           </Link>             
        </div>

        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaRegSun color='white'/>
           <Link to="/settings" className='text-[14px] leadig-[20px] font-bold text-white'>
           Settings
           </Link>              
        </div>
        

    </div>
  )
}

export default Sidebar