/* eslint-disable no-mixed-spaces-and-tabs */
import { useGetAllAppsQuery } from "../store/features/application/appApiSlice"
// import Sidebar from "./Sidebar"
import { FiArrowRight } from "react-icons/fi"
/* 
import { Button, Card } from "flowbite-react"
import SidebarV2 from "./SidebarV2" */
/* import { Link, useParams } from "react-router-dom" */
import { useUpdateAppStatusMutation } from "../store/features/application/appApiSlice"
/* import {FiArrowRight,} from 'react-icons/fi'; */
import "../createapp.css"
import { Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"
import CustomLoader from "../components/CustomLoader"

// import { format } from "date-fns";

const AllApplication = () => {
	//1- Get all apps
	//2- Render using .map()

	const {
		data: apps,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetAllAppsQuery()

	// const { id } = useParams();

	const [updateAppStatus] = useUpdateAppStatusMutation()

	// app({status: 'ACTIVE'})

	let result

	if (isLoading) {
		result = (
			<h1 className="text-2xl text-center font-bold align-center">
				Loading Apps ...
			</h1>
		)
	} else if (isSuccess) {
		result = (
			<DashboardLayout>
				<div className="border w-full">
					<div className="flex px-2 divide-x-2 mt-8  w-full gap-2">
						<h1 className="text-[#5a5c69] text-[28px] leading-[34px] px-4 font-normal cursor-pointer ml-6">
							All Applications
						</h1>

						<nav className="flex px-4 w-full" aria-label="Breadcrumb">
							<ol className="inline-flex items-center space-x-1 md:space-x-3">
								<li className="inline-flex items-center">
									<Link
										to="/dashboard"
										className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 dark:text-gray-400"
									>
										<svg
											className="w-3 h-3 mr-2.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
										</svg>
										Home
									</Link>
								</li>
								<li>
									<div className="flex items-center">
										<svg
											className="w-3 h-3 text-gray-400 mx-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">
											components
										</span>
									</div>
								</li>
								<li aria-current="page">
									<div className="flex items-center">
										<svg
											className="w-3 h-3 text-gray-400 mx-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
											All Application
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 pb-5">
						{apps.map((app, i) => {
							return (
								<Card
									className="bg-green-800"
									style={{ backgroundColor: "teal" }}
									key={i}
								>
									<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										<p>{app.appName}</p>
									</h5>

									<div
										className="cursor-pointer flex p-2 gap-2 text-white bg-teal-900 w-28 rounded-lg"
										onClick={() => {
											updateAppStatus({ _id: app?._id, status: "ACTIVE" })
											console.log(updateAppStatus)
										}}
									>
										{isLoading ? <CustomLoader /> : 'Activate'}
									</div>

									<div className="font-normal text-gray-900 dark:text-white">
										<p>Status: {app.status}</p>
										<p>Created: {app.createdAt.toString()}</p>
									</div>
									<Link to={`/ViewDetails/${app._id}`}>
										<Button>
											<p className="mr-1">View Details</p>
											<FiArrowRight />
										</Button>
									</Link>
								</Card>
							)
						})}
					</div>
				</div>
			</DashboardLayout>
		)
	} else if (isError) {
		result = <h1>Sorry we can't process your request</h1>
		console.log(error)
	}

	return result
}

export default AllApplication
