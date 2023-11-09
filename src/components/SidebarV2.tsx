import { Sidebar } from "flowbite-react"
import { HiUser } from "react-icons/hi"
import { AiOutlineAppstore } from "react-icons/ai"
import { PiAppStoreLogo } from "react-icons/pi"
import { RiSettings4Line } from "react-icons/ri"
import avt2 from "../assets/react.svg"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function SidebarV2() {
	const [showAppMenu, setShowAppMenu] = useState(false)

	return (
		<Sidebar aria-label="SidebarV2">
			<Sidebar.Items>
				<Sidebar.ItemGroup className="h-full flex-col">
					<div className="mb-9 text-2xl text-white flex">
						<img
							alt="Flowbite React Logo"
							className="mr-3 h-fit w-fit sm:h-9"
							src={avt2}
						/>

						<h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							GNS
						</h1>
					</div>

					<div className="flex flex-col gap-3">
						<Link to="/dashboard">
							<p className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded">
								<AiOutlineAppstore />
								Dashboard
							</p>
						</Link>

						<p
							onClick={() => setShowAppMenu(!showAppMenu)}
							id="dropdownHelperButton"
							data-dropdown-toggle="dropdownHelper"
							className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded"
						>
							<PiAppStoreLogo />
							Applications
						</p>
						{showAppMenu && (
							<div
								id="dropdownHelper"
								className={`z-10 ${
									showAppMenu ? "" : "hidden"
								} bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600`}
							>
								<Link to="/allApplication">
									<p
										id="dropdownHelperButton"
										data-dropdown-toggle="dropdownHelper"
										className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded"
									>
										<PiAppStoreLogo />
										All Applications
									</p>
								</Link>

								<Link to="/CreateApplication">
									<p
										id="dropdownHelperButton"
										data-dropdown-toggle="dropdownHelper"
										className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded"
									>
										<PiAppStoreLogo />
										Create application
									</p>
								</Link>
							</div>
						)}

						<Link to="/settings">
							<p className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded">
								<RiSettings4Line />
								Settings
							</p>
						</Link>

						<Link to="/users">
							<p className="flex gap-2 items-center text-white hover:bg-gray-700 p-3 rounded">
								<RiSettings4Line />
								Users
							</p>
						</Link>
					</div>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}
