import React from "react"
import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"

const AllApplication = () => {
	return (
		<div>
			<div className="flex h-full overflow-hidden">
				<div className="basis-[12%] h-[100vh] ">
					<Sidebar />
				</div>
				<div className="basis-[88%] border">
					<Dashboard />
					<div className="flex items-center justify-between mt-6">
						<h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer ml-6">
							Dashboard
						</h1>
						<button className="bg-[teal] text-white rounded-lg mr-6 flex justify-center h-[32px] px-[30px]">Create Application</button>
					</div>
					<div className=" flex ml-8 p-6 mt-10 h-80 overflow-hidden">
						<div className="w-full p-1 bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-emerald-600 lg:max-w-xl">
							<div className="flex justify-between bg-[teal] text-white h-[100px]">
								<h1 className="uppercase text-[20px] mt-16">gns</h1>
								<p className="mt-20">view Details</p>
							</div>
							<div>
								<div className="flex justify-between">
									<p className="mt-3">status: Active</p>
									<button
										className="bg-[teal] text-white rounded-lg mt-6 px-[20px] h-[25px] text-[15px]"
										type="button"
									>
										Deactivate
									</button>
								</div>
								<div className="mt-6">
									<p>Created: 20/09/2023</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllApplication
