import { Sidebar } from "flowbite-react"
import {
	AiOutlineAppstore,
	AiOutlineClose,
	// AiOutlineCloseCircle,
} from "react-icons/ai"
import { PiAppStoreLogo } from "react-icons/pi"
import { RiUserSettingsLine } from "react-icons/ri"
import avt2 from "../assets/react.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
/* import { BsMenuButtonWide } from "react-icons/bs"
import { IoCreateOutline } from "react-icons/io5" */
import { TbUsersGroup } from "react-icons/tb"
import {GiHamburgerMenu} from 'react-icons/gi';
import { Tooltip } from "flowbite-react"

export default function SidebarV2() {
	// const [showAppMenu, setShowAppMenu] = useState(false)
	const [collapse, setCollapse] = useState(true);
	const [active, setActive] = useState(false);

	return (
		<Sidebar
			aria-label="SidebarV2"
			style={{ boxShadow: "none" }}
			collapsed={collapse}
			className="bg-gray-50 dark:bg-gray-800"
		>
			<Sidebar.Items>
				<Sidebar.ItemGroup className="h-full flex-col ">
					<div className="mb-9 text-2xl text-white flex justify-between">
						{!collapse && (
							<div className="flex">
								<img
									alt="Flowbite React Logo"
									className="mr-3 h-fit w-fit sm:h-9"
									src={avt2}
								/>
								<h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
									GNS
								</h1>
							</div>
						)}

						<div className="flex justify-between align-center">
							{/* 	{!collapse && (
							
							)} */}
							<button
								onClick={() => setCollapse(!collapse)}
								className="hover:bg-gray-600 rounded"
							>
								{collapse ? (
									<Tooltip content="Expand" placement="right">
										<GiHamburgerMenu className="m-1" />
									</Tooltip>
								) : (
									<AiOutlineClose />
								)}
							</button>
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<Link to="/dashboard" onClick={() => setActive(true)}>
							<p
								className={
									active
										? "flex gap-2 items-center text-white bg-gray-700  p-3 rounded"
										: "flex gap-2 items-center text-white hover:bg-gray-700  p-3 rounded"
								}
							>
								{collapse ? (
									<Tooltip content="Dashboard" placement="right">
										<AiOutlineAppstore size={30} className="pr-2" />
									</Tooltip>
								) : (
									<>
										<AiOutlineAppstore size={30} />
										Dashboard
									</>
								)}
							</p>
						</Link>

						<Link to="/allApplication">
							<p className="flex gap-2 items-center text-white hover:bg-gray-700  p-3 rounded">
								{collapse ? (
									<Tooltip content="Apps" placement="right">
										<PiAppStoreLogo size={30} className="pr-2" />
									</Tooltip>
								) : (
									<>
										<PiAppStoreLogo size={30} />
										Dashboard
									</>
								)}
							</p>
						</Link>

						<Link to="/settings">
							<p className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded">
								{collapse ? (
									<Tooltip content="Settings" placement="right">
										<RiUserSettingsLine size={30} className="pr-2" />
									</Tooltip>
								) : (
									<>
										<RiUserSettingsLine size={30} />
										Settings
									</>
								)}
							</p>
						</Link>

						<Link to="/users">
							<p className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded">
								{collapse ? (
									<Tooltip content="Users" placement="right">
										<TbUsersGroup size={30} className="pr-2" />
									</Tooltip>
								) : (
									<>
										<TbUsersGroup size={30} />
										Users
									</>
								)}
							</p>
						</Link>
					</div>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}
