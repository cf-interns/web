
// import { Card, Dropdown } from 'flowbite-react';
import { Dropdown, Card } from "flowbite-react"
import { useParams } from "react-router-dom"
import { useGetSpecificAppQuery,useDeleteAppMutation } from "../store/features/application/appApiSlice"
import DashboardLayout from "./DashboardLayout";
import {useNavigate} from "react-router-dom"

const AppDetails = () => {

	const navigate  = useNavigate();
	const { id } = useParams()
	const { data: app, isLoading } = useGetSpecificAppQuery(id as string);
	const [hook,isSuccess] = useDeleteAppMutation()
	console.log(app)
	
	
	return (
	<div>
   <DashboardLayout>	       
<div className="flex justify-center align-center m-10">
					<Card className="max-w-2xl " >
						<div className="flex justify-end px-4 pt-">
							<Dropdown inline label="">
								<Dropdown.Item>
									<a
										href="#"
										className="block px-4 py-2 bg-teal-600 text-sm text-white dark:text-gray-200 "
									>
										Edit app
									</a>
								</Dropdown.Item>

								<Dropdown.Item>
									<a
										href="#"
										className="block px-4 bg-red-600 py-2 text-sm text-white dark:text-white-600 "
										onClick = {() => {
											hook(id);
											if (isLoading) return "loading..."
											if(isSuccess) {
												navigate('CreateApplication')
											
											}
										}}
									>
										Delete app
									</a>
								</Dropdown.Item>
							</Dropdown>
						</div>
						
						<div className="flex flex-col items-center pb-10 m-4">

							<h5 className="text-2xl text-right font-meduim mb-8 ">Application Details</h5>
							<div className="grid grid-flow-row-dense grid-cols-3 gap-4 grid-rows-3 m-4...">

								<div className="m-4 p-0">
									<h1 className="text-zinc-600">Application name</h1>
									<p className="text-[gray]">{app?.appName}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-zinc-600">ID</h1>
									<p className="text-[gray]">{app?._id}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-zinc-600">Application status</h1>
									<p className="text-[gray]">{app?.status}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-zinc-600">Created date</h1>
									<p className="text-[gray]">{app?.createdAt.toString()}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-zinc-600">Token</h1>
									<p className="text-[gray]">{app?.token}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-zinc-600">App Description</h1>
									<p className="text-[gray]">{app?.description}</p>
								</div>
								<div className="m-4 p-0 col-span-3 p-2 m-2">
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Token</label>
										<div className="flex">
											<input type="text" name="token" id="confirm-password" placeholder="URERHKJQWEGASGSG1234324534324AD" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
											<button type="submit" className="btn-btn">Regenerate</button>
										</div>
									</div>
								</div>

							</div>
							<div>

							</div>
						</div>
					</Card>
					</div>
					</DashboardLayout>
</div>





				


		// return content;

	)
}

export default AppDetails
