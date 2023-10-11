import React from "react"
import {NavbarDash} from "./Dashboard"
import SidebarV2 from "./SidebarV2"

const Settings = () => {
	return (
		<div>

			<div className='flex h-full overflow-hidden'>
				<div className='basis-[12%] h-[100vh] '>
					<SidebarV2 />
				</div>
				<div className='basis-[88%] border'>
					<NavbarDash />
					<h1 className='text-[#5a5c69] text-[28px] leading-[34px] ml-3 mt-3 font-normal cursor-pointer'>Account Settings</h1>

					<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
						<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-emerald-600 lg:max-w-xl">
							<h1 className="text-3xl font-semibold text-center text-orange-700 uppercase hover:text-emerald-600">
								Change Password
							</h1>
							<form className="mt-6">
								<div className="mb-2">
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-800"
									>
										OLd Password
									</label>
									<input
										type="email"
										className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>
								<div className="mb-2">
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-800"
									>
										New Password
									</label>
									<input
										type="email"
										className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>
								<div className="mb-2">
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-800"
									>
										Confirm Password
									</label>
									<input
										type="email"
										className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>

								<div className="mt-6">
									<button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-lg hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600">
										Change
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings
