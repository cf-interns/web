/* eslint-disable no-mixed-spaces-and-tabs */
import { useGetAllAppsQuery } from "../store/features/application/appApiSlice"
import {NavbarDash} from "./Dashboard"
import Sidebar from "./Sidebar"
import {FiArrowRight} from 'react-icons/fi';

import { Button, Card } from 'flowbite-react';
// import { format } from "date-fns";

const AllApplication = () => {
//1- Get all apps
//2- Render using .map()

	const {data: apps, isLoading, isSuccess, isError, error} = useGetAllAppsQuery();

	 let result;

	 if(isLoading) {
		result = <h1>Loading ...</h1>
	 } else if(isSuccess) {

		result = (
			<div >
			<div className="flex h-full overflow-hidden">
				<div className="basis-[12%] h-[100vh] ">
					<Sidebar />
				</div>
				<div className="basis-[88%] border">
					<NavbarDash />
					<div className="flex items-center justify-between mt-6">
						<h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer ml-6">
							All Applications
						</h1>
						<button className="bg-[teal] text-white rounded-lg mr-6 flex justify-center h-[32px] px-[30px]">Create Application</button>
					</div>


					{/* This needs to rendered dynamically by mapping through the number apps the user has created */}
				{/* 	<div className=" flex ml-8 p-6 mt-10 h-80 overflow-hidden">
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
					</div> */}

					<section className="flex flex-row gap-3 ml-2 mt-2" >
					{apps.map((app, i) => {
		return <Card className="max-w-sm bg-green-800" style={{backgroundColor: 'teal'}} key={i}>
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		  <p>
			{app.appName}
		  </p>
		</h5>
		<p className="font-normal text-gray-900 dark:text-white">
		  <p>
			Status: {app.status}
		  </p>
		  <p>
			Created: {app.createdAt.toString()}
		  </p>
		</p>
		<Button>
		  <p className="mr-1">
			Open 
		  </p>
		  <FiArrowRight />
		</Button>
	  </Card>
		
	})}
					</section>
	
	




				</div>
			</div>
		</div>
		)
	 } else if(isError) {
		result = <h1>Sorry we can't process your request</h1>
		console.log(error);
		
	 }


	 return result;

	
}

export default AllApplication


/* 

return (
		
	)*/