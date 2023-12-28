import { Sidebar } from "flowbite-react"
import {
	AiOutlineAppstore,
	AiOutlineClose,
	// AiOutlineCloseCircle,
	AiOutlineNotification,
} from "react-icons/ai"
import { PiAppStoreLogo } from "react-icons/pi"
import { RiUserSettingsLine } from "react-icons/ri"
import avt2 from "../assets/react.svg"
import { Link,  } from "react-router-dom"
import { useState } from "react"
/* import { BsMenuButtonWide } from "react-icons/bs"
import { IoCreateOutline } from "react-icons/io5" */
import { TbUsersGroup } from "react-icons/tb"
import { GiHamburgerMenu } from "react-icons/gi"
import { Tooltip } from "flowbite-react"

export default function SidebarV2() {
	// const [showAppMenu, setShowAppMenu] = useState(false)
	const [collapse, setCollapse] = useState(false)
	const [active, setActive] = useState(false)

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
								<Link
									className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
									to="/dashboard"
								>
									GNS
								</Link>
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
						<Link to="/dashboard" onClick={() => setActive(!active)}>
							<div
								className={`flex gap-2 items-center text-white ${
									window.location.href.indexOf("dashboard") > 0
										? "bg-gray-700"
										: ""
								} p-3 rounded`}
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
							</div>
						</Link>

						<Link to="/allApplication">
							<div
								className={`flex gap-2 items-center text-white ${
									window.location.href.indexOf("allApplication") > 0
										? "bg-gray-700"
										: ""
								} p-3 rounded`}
							>
								{collapse ? (
									<Tooltip content="Apps" placement="right">
										<PiAppStoreLogo size={30} className="pr-2" />
									</Tooltip>
								) : (
									<>
										<PiAppStoreLogo size={30} />
										Applications
									</>
								)}
							</div>
						</Link>

						<Link to="/tools">
							<div
								className={`flex gap-2 items-center text-white ${
									window.location.href.indexOf("tools") > 0 ? "bg-gray-700" : ""
								} p-3 rounded`}
							>
								{collapse ? (
									<Tooltip content="Notifications" placement="right">
										<AiOutlineNotification size={30} className="pr-2" />
									</Tooltip>
								) : (
									<>
										<AiOutlineNotification size={30} />
										Send Notification
									</>
								)}
							</div>
						</Link>

						<Link to="/settings">
							<div
								className={`flex gap-2 items-center text-white ${
									window.location.href.indexOf("settings") > 0
										? "bg-gray-700"
										: ""
								} p-3 rounded`}
							>
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
							</div>
						</Link>

						<Link to="/users">
							<div
								className={`flex gap-2 items-center text-white ${
									window.location.href.indexOf("users") > 0 ? "bg-gray-700" : ""
								} p-3 rounded`}
							>
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
							</div>
						</Link>
					</div>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}
