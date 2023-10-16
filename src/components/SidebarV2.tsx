

import { Sidebar } from 'flowbite-react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { PiAppStoreLogo } from 'react-icons/pi';
import { RiSettings4Line, RiLogoutCircleRLine, /* RiApps2Line */ } from 'react-icons/ri';
import avt2 from '../assets/react.svg'
import { useDispatch } from 'react-redux';
import { logOut } from '../store/features/auth/authSlice';
import { Link } from 'react-router-dom';

export default function SidebarV2() {
  const dispatch = useDispatch();
  return (
    <Sidebar aria-label="SidebarV2" className='h-full' style={{ borderRadius: '0px', width: 'auto' }}>
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
              href="/dashboard"
              icon={AiOutlineAppstore}
            ><Link to="/dashboard">
              <p>
              Dashboard
            </p></Link>

            </Sidebar.Item>

            <Sidebar.Collapse
              icon={PiAppStoreLogo}
              label="Applications"
            >
              <Sidebar.Item>
                <Link to="/allApplication">  All Apps</Link>

              </Sidebar.Item>
              <Sidebar.Item>
                <Link to="/CreateApplication"> Create App</Link>

              </Sidebar.Item>
              {/*    <Sidebar.Item href="#">
              Refunds
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Shipping
            </Sidebar.Item> */}
            </Sidebar.Collapse>

            <Sidebar.Item
              icon={RiSettings4Line}
            >
              <Link to='/settings'>
                Settings
              </Link>
            </Sidebar.Item>

            <Sidebar.Item
              href="/"
              icon={RiLogoutCircleRLine}
            >
              <button onClick={(() => dispatch(logOut()))}>
                Logout
              </button>
            </Sidebar.Item>
          </div>


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


