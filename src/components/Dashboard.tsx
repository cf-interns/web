

import { Dropdown, Navbar, } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import avt from '../assets/avatar2.jpeg';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/features/auth/authSlice';
import { useGetSpecificUserQuery } from '../store/features/user/usersApiSlice';
import { Link } from 'react-router-dom';
// import avt2 from '../assets/react.svg'

export const  NavbarDash = () => {
  const dispatch = useDispatch();
  const {data:user, isLoading} = useGetSpecificUserQuery();

  const content = isLoading ? (
		<h1>Loading ...</h1>
	) : (
		<>
			<Navbar
				fluid
				// rounded
			>
				<Navbar.Brand href="https://flowbite-react.com" />
				{/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-fit w-fit sm:h-9"
          src={avt2}
        /> */}
				<Navbar.Brand href="https://flowbite-react.com">
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						{/* GNS */}
					</span>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<h1 className="text-xl text-white p-1 mr-2">{user?.lastName}</h1>
					<Dropdown
						arrowIcon={false}
						inline
						label={<Avatar alt="User settings" img={avt} rounded />}
					>
						<Dropdown.Header>
							<span className="block text-sm">{user?.firstName || "John"}</span>
							<span className="block truncate text-sm font-medium">
								{user?.email || "john@doe.com"}
							</span>
						</Dropdown.Header>
						<Link
							to="/dashboard"
							className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
						>
							Dashboard
						</Link>
						<Link
							to="/settings"
							className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
						>
							Settings
						</Link>
						<Dropdown.Divider />
						<Dropdown.Item onClick={() => dispatch(logOut())} href="/">
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
		</>
	)

  return content;

 
}


