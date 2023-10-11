

import { Sidebar } from 'flowbite-react';
import {  HiUser,  } from 'react-icons/hi';
import {AiOutlineAppstore} from 'react-icons/ai';
import {PiAppStoreLogo} from 'react-icons/pi';
import {RiSettings4Line} from 'react-icons/ri';
import avt2 from '../assets/react.svg'

export default function SidebarV2() {
  return (
    <Sidebar aria-label="SidebarV2" className='h-full' style={{borderRadius: '0px', width: 'auto'}}>
      <Sidebar.Items className='rounded-none'>

        <Sidebar.ItemGroup className='h-full flex-col'>

          <div className='mb-9 text-2xl text-white flex'>
          <img
          alt="Flowbite React Logo"
          className="mr-3 h-fit w-fit sm:h-9"
          src={avt2}
        />
        
        <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GNS</h1>
          </div>

            <div className='flex flex-col gap-8'>


            <Sidebar.Item
            href="#"
            icon={AiOutlineAppstore}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>

          <Sidebar.Collapse
            icon={PiAppStoreLogo}
            label="Applications"
          >
            <Sidebar.Item href="#">
              All Apps
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Create App
            </Sidebar.Item>
         {/*    <Sidebar.Item href="#">
              Refunds
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Shipping
            </Sidebar.Item> */}
          </Sidebar.Collapse>

          <Sidebar.Item
            href="#"
            icon={RiSettings4Line}
          >
            <p>
              Settings
            </p>
          </Sidebar.Item>

          <Sidebar.Item
            href="#"
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
            </div>


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


