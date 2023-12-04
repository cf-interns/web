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
// import { ,  } from "flowbite-react"
import { Link } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"
import CustomLoader from "../components/CustomLoader"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { useDispatch } from "react-redux"
import { setUpApplications } from "../store/features/application/appSlice"
import { Dialog } from "primereact/dialog"
import CreateApplication from "./CreateApplication"
import { useState } from "react"
import BreadCrumbs from "../components/BreadCrumbs"

// import { format } from "date-fns";

const AllApplication = () => {
	const header = <img alt="Card" src="/src/card5.jpg" className="h-[10rem]" />
	const footer = (_id: string, status: string) => {
		return (
			<div className="flex items-center justify-between">
				<Link to={`/appDetail/${_id}`}>
					<Button className="flex p-2 gap-2 text-black bg-transparent hover:bg-teal-900 outline outline-teal-900 outline-1 hover:text-white w-fit rounded">
						<span>View Details</span>
						<FiArrowRight />
					</Button>
				</Link>
				<Button
					className="cursor-pointer justify-center flex p-2 gap-2 text-white bg-teal-900 rounded"
					onClick={() => {
						updateAppStatus({
							_id: _id,
							status: status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
						})
						console.log(updateAppStatus)
					}}
				>
					{isLoading ? (
						<>
							<CustomLoader />
							Activating...
						</>
					) : status === "ACTIVE" ? (
						"Deactivate"
					) : (
						"Activate"
					)}
				</Button>
			</div>
		)
	}
	//1- Get all apps
	//2- Render using .map()

	const {
		data: apps,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetAllAppsQuery();

	const dispatch = useDispatch();
	dispatch(setUpApplications({app: apps}));
	
	

	// const { id } = useParams();

	const [updateAppStatus] = useUpdateAppStatusMutation();
	const [visible, setVisible] = useState(false)


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
					<div className=" px-2 divide-x-2 mt-8  w-full gap-2">
						<div className="flex justify-between items-center ">
							
							
								<div className="flex items-center">
									<BreadCrumbs />

									<h1 className="text-[#5a5c69] text-2xl px-4 font-normal cursor-pointer ml-6">
										All Applications
									</h1>
								</div>
						

							<div>
								<button
									className=" bg-gray-800 text-white w-50 text-md w-52 rounded py-4"
									onClick={() => setVisible(true)}
								>
									Create App
								</button>
								<Dialog
									visible={visible}
									style={{ width: "auto" }}
									onHide={() => setVisible(false)}
									className="bg-gray-300"
								>
									<CreateApplication setVisible={setVisible} />
								</Dialog>
							</div>
						</div>
					</div>

					<div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 pb-5 ">
						{apps.map((app, i) => {
							return (
								<div className="">
									<Card
										footer={footer(app._id, app.status)}
										header={header}
										className="w-10rem ml-4"
										key={i}
									>
										<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
											<p>{app.appName}</p>
										</h5>
										<div className=" flex items-center justify-between font-normal text-gray-900 mb-5 dark:text-black">
											<p className="mt-4">Status: {app.status}</p>
											<p className="mt-4">
												Created: {app.createdAt.toString()}
											</p>
										</div>

										{/* <div
										className="cursor-pointer justify-center flex p-2 gap-2 text-white bg-teal-900 w-fit   rounded-lg"
										onClick={() => {
											updateAppStatus({
												_id: app?._id,
												status: app.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
											})
											console.log(updateAppStatus)
										}}
									>
										{isLoading ? (
											<>
												<CustomLoader />
												Activating...
											</>
										) : app.status === "ACTIVE" ? (
											"Deactivate"
										) : (
											"Activate"
										)}
									</div> */}
										<h5 className="text-xl font-light tracking-tight mt-5 text-gray-600">
											<p>{app.description}</p>
										</h5>

										{/* <Link to={`/ViewDetails/${app._id}`}>
										<Button>
											<p className="mr-1">View Details</p>
											<FiArrowRight />
										</Button>
									</Link> */}
									</Card>
								</div>
							)
						})}
					</div>

					{/* 
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
										className="cursor-pointer justify-center flex p-2 gap-2 text-white bg-teal-900 w-fit   rounded-lg"
										onClick={() => {
											updateAppStatus({
												_id: app?._id,
												status: app.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
											})
											console.log(updateAppStatus)
										}}
									>
										{isLoading ? (
											<>
												<CustomLoader />
												Activating...
											</>
										) : app.status === "ACTIVE" ? (
											"Deactivate"
										) : (
											"Activate"
										)}
									</div>

									<div className="font-normal text-gray-900 dark:text-white">
										<p>Status: {app.status}</p>
										<p>Created: {app.createdAt.toString()}</p>
									</div>
									<Link to={`/appDetail/${app._id}`}>
										<Button>
											<p className="mr-1">View Details</p>
											<FiArrowRight />
										</Button>
									</Link>
								</Card>
							)
						})}
					</div> */}
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
