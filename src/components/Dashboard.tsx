import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Dashboard = () => {
  const [ open, setOpen] = useState(false)

  const showDropDown = () => {
    setOpen(!open)                                                                                         
  }
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px] bg-[teal]'>

      <div>
        <p className='text-white'>GNS </p>
      </div>

      <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
        <p className='text-white'>Victory Excel</p>
        <div className='h-[50px] w-[50px] cursor-pointer flex items-center relative'>
          <FaUser color='white'/>
        </div>

        {
          open &&
          <div className='bg-white border h-[75px] w-[90px] absolute bottom-[-100px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
            <p className='cursor-pointer hover:text-[blue] font-semibold'>Log Out</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard