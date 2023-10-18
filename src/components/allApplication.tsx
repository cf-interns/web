/* eslint-disable no-mixed-spaces-and-tabs */
import { useGetAllAppsQuery } from "../store/features/application/appApiSlice"
import {NavbarDash} from "./Dashboard"
// import Sidebar from "./Sidebar"
import {FiArrowRight,FiPower} from 'react-icons/fi';
import {TbLayoutGridAdd} from 'react-icons/tb'
import "../createapp.css"
import { Button, Card } from 'flowbite-react';
import SidebarV2 from "./SidebarV2";
import { Link } from "react-router-dom";
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
			<div className="flex h-full">
				<div className="basis-[12%] h-[100vh] ">
					<SidebarV2 />
				</div>
				<div className="basis-[88%] border">
					<NavbarDash />
					<div className="flex items-center justify-between mt-6 flex-wrap">
						<h1 className="text-4xl text-gray-500 text-center font-bold m-auto p-2 mb-2">
							All Applications
						</h1>
						<Button color="green" className="hover:text-white p-2 m-2 border-0" style={{backgroundColor: 'green'}}>
		  <p className="mr-1 hover:text-white text-white text-md font-bold">
			<Link to="/CreateApplication">Create An App</Link>
			
		  </p>
		  <TbLayoutGridAdd className='text-white'/>
		</Button>
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
                   
					<section className="wrapper-a" >
					{apps.map((app, i) => {
		return <Card className="card"  key={i}>
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		  <p>
			{app.appName}
		  </p>
		</h5>
		<p className="font-normal text-gray-900 dark:text-white ">
			<div className="flex items-center gap-4">
				<div className="flex gap-2">
					<h1>Status:</h1>
				<p className="text-md text-red-300">
			{app.status}
		  </p>
				</div>
			
		  <span><Button color="green" className="border-0">
		  <p className="mr-1">
			Activate 
		  </p>
		  <FiPower />
		</Button></span>
			</div>
			<div className="flex flex-col gap-1">
			<h1 className="text-green-200 text-md">GNS Application</h1>
		  <p>
			Created: {app.createdAt.toString()}
		  </p>
			</div>
		
		  
		</p>
		<Button>
			<Link to="/appDetails" >  <p className="mr-1">
			Open 
		  </p></Link>
		
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