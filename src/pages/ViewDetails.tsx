import React from "react"
import { Link, useParams } from "react-router-dom"
import { useGetSpecificAppQuery } from "../store/features/application/appApiSlice"
import DashboardLayout from "../components/DashboardLayout"

const ViewDetails = () => {
	// const id = window.location.href.split('viewDetails/')[1]
	const { id } = useParams()
	const { data: app, isLoading } = useGetSpecificAppQuery(id as string)
	console.log(app)
	if (isLoading) return "Loading...."
	return (
		<DashboardLayout>
			<div className="flex px-2 divide-x-2 mt-8">
				<Link to="/allApplication">
					<svg
						className="w-10 ml-20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
					</svg>
				</Link>
			</div>
			<div className="min-h-screen md:container md:mx-auto px-80 overflow-hidden">
				<div className="w-full content-center h-[80vh] ml-20 p-6 bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl">
					<h4 className="text-2xl">Application Details</h4>

					<div className="flex items-center justify-between mt-6">
						<p className="text-gray-800">Application Name</p>
						<p className="text-[gray]">{app?.appName}</p>
					</div>

					<div className="flex items-center justify-between mt-6">
						<p className="text-gray-800">Application Description</p>
						<p className="text-[gray]">{app?.description}</p>
					</div>

					<div className="flex items-center justify-between mt-6">
						<p className="text-gray-800">Application Status</p>
						<p className="text-[gray]">{app?.status}</p>
					</div>

					<div className="flex items-center justify-between mt-6">
						<p className="text-gray-800">Created Date</p>
						<p className="text-[gray]">{app?.createdAt.toString()}</p>
					</div>

					<div>
						<button className="bg-[red] text-[white] rounded-lg p-3 m-10">
							Delete App
						</button>
					</div>

					<div>
						<Link to="/email">
							<button className="bg-[green] text-[white] rounded-lg p-3 m-10">
								Send Email
							</button>
						</Link>
					</div>

					<div>
						<Link to="/sms">
							<button className="bg-[blue] text-[white] rounded-lg p-3 m-10">
								Send SMS
							</button>
						</Link>
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default ViewDetails
