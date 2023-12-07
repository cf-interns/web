

import { Dropdown, Navbar, } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import avt from '../assets/avatar2.jpeg';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/features/auth/authSlice';
import { Link } from 'react-router-dom';
// import avt2 from '../assets/react.svg'

export const  NavbarDash = () => {
  const dispatch = useDispatch();
  const user2 = localStorage.getItem('user');
  const realUser = JSON.parse(user2 || '{}')

  

  return (
		<>
			<Navbar
				fluid
			>
				<Navbar.Brand href="https://flowbite-react.com" />
			
				<Navbar.Brand href="https://flowbite-react.com">
					{/* <span className="whitespace-nowrap text-xl font-semibold dark:text-white">
						GNS 
					</span> */}
				</Navbar.Brand>
				<div className="flex md:order-2">
					<h1 className="text-xl text-white p-1 mr-2">{realUser?.lastName}</h1>
					<Dropdown
						arrowIcon={false}
						inline
						label={<Avatar alt="User settings" img={avt} rounded />}
					>
						<Dropdown.Header>
							<span className="block text-sm">
								{realUser?.firstName || "John"}
							</span>
							<span className="block truncate text-sm font-medium">
								{realUser?.email || "john@doe.com"}
							</span>
						</Dropdown.Header>
						<Link
							to="/dashboard"
							className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full focus:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
						>
							Dashboard
						</Link>
						<Link
							to="/settings"
							className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full  focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
						>
							Settings
						</Link>
						<Dropdown.Divider />
						<Link onClick={() => dispatch(logOut())} to="/" className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white">
							Sign out
						</Link>
					</Dropdown>
					<Navbar.Toggle />
				</div>
			</Navbar>
		</>
	)

 
}


