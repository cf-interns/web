// import { Card, Dropdown } from 'flowbite-react';
import { Dropdown, Card } from "flowbite-react"
import { useParams } from "react-router-dom"
import {
	useGetSpecificAppQuery,
	useDeleteAppMutation,
} from "../store/features/application/appApiSlice"
import DashboardLayout from "../components/DashboardLayout"
import { useNavigate } from "react-router-dom"

const AppDetails = (id) => {
	
	const navigate = useNavigate()
	// const { id } = useParams()
	const { data: app, isLoading } = useGetSpecificAppQuery(id?.id)
	 const [hook, isSuccess] = useDeleteAppMutation()
	console.log(app?._id, 'Appp');
   
	return (
		<div>
			      
<div className="flex justify-center align-center m-10 ">
					<Card className="w-[60vw] ">
						<div className="flex justify-end px-4 text-teal-800 text-lg dark:text-white">
							<Dropdown inline  label="Drop">
								<Dropdown.Item>
									<a
										href="#"
										className="block px-4 bg-red-600 py-2 text-sm text-white dark:text-white-600 "
										onClick={() => {
											hook(app?._id)
											if (isLoading) return "loading..."
											if (isSuccess) {
												navigate("/allApplication")
											}
										}}
									>
										Delete app
									</a>
								</Dropdown.Item>
							</Dropdown>
						</div>

						<div className="flex flex-col items-center pb-10 m-4">

							<h5 className="text-2xl text-right font-meduim mb-8 text-teal-700 dark:text-white -500">Application Details</h5>
							<div className="grid grid-flow-row-dense grid-cols-3 gap-4 grid-rows-3 m-8">
								<div className="m-4 p-0">
									<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">Application name</h1>
									<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">{app?.appName}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">ID</h1>
									<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700 ">{app?._id}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">Application status</h1>
									<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">{app?.status}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">Created date</h1>
									<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">{app?.createdAt.toString()}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">Token</h1>
									<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">{app?.token}</p>
								</div>
								<div className="m-4 p-0">
									<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">App Description</h1>
									<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">{app?.description}</p>
								</div>
								<div className="m-4 p-0 col-span-3 p-2 m-4">
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Token
										</label>
										<div className="flex gap-4">
											<input type="text" name="token" id="confirm-password" placeholder="URERHKJQWEGASGSG1234324534324AD" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " ></input>
											
											<button type="submit" className="text-white bg-teal-800 p-4 rounded">Regenerate</button>
										</div>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</Card>
				</div>
		
		</div>

		// return content;
	)
}

export default AppDetails
