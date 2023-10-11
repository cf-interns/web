

import { Dropdown, Navbar, } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import avt from '../assets/avatar2.jpeg';
// import avt2 from '../assets/react.svg'

export const  NavbarDash = () => {
  return (
    <Navbar
      fluid
      // rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-fit w-fit sm:h-9"
          src={avt2}
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {/* GNS */}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <h1 className='text-xl text-white p-1'>Alpha</h1>
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={avt} rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Alpha
            </span>
            <span className="block truncate text-sm font-medium">
              alpha@gns.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item >
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item >
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
     {/*  <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  )
}


