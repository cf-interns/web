import React from "react"
import SidebarV2 from "./SidebarV2"
import { NavbarDash } from "./Dashboard"
import { Link } from "react-router-dom"

const ViewDetails = () => {
	return (
		<div>
			<div className="flex">
				<div className="basis-[12%] h-[100vh] ">
					<SidebarV2 />
				</div>
				<div className="basis-[88%] border">
					<NavbarDash />
					<div className="min-h-screen md:container md:mx-auto px-80 overflow-hidden">
						<div className="w-full content-center h-[80vh] m-28 p-6 bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl">
							<Link to="/allApplication">
								<svg
									className="w-10 h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
								</svg>
							</Link>
							<p>Application Details</p>

							<div className="flex items-center justify-between mt-6">
								<p className="text-gray-200">Application Name</p>
								<p className="text-[gray]">Global Notification System</p>
							</div>

							<div className="flex items-center justify-between mt-6">
								<p>Application Details</p>
								<p className="text-[gray]">A notification system</p>
							</div>

							<div className="flex items-center justify-between mt-6">
								<p>Application Status</p>
								<p className="text-[gray]">Inactive</p>
							</div>

							<div className="flex items-center justify-between mt-6">
								<p>Created Date</p>
								<p className="text-[gray]">13/10/2023</p>
							</div>

							<div className="flex items-center justify-between mt-6">
								<p>Last Updated</p>
								<p className="text-[gray]">13/10/2023</p>
							</div>

							<div>
							<button className="bg-[red] text-[white] rounded-lg p-3 m-10">Delete App</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewDetails
