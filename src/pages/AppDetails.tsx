// import { Card, Dropdown } from 'flowbite-react';
import { Dropdown, Card } from "flowbite-react"
import {
	useGetSpecificAppQuery,
	useDeleteAppMutation,
} from "../store/features/application/appApiSlice"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppDetails = (id: any) => {
	const navigate = useNavigate()
	// const { id } = useParams()
	const { data: app, isLoading } = useGetSpecificAppQuery(id?.id)
	const [hook, isSuccess] = useDeleteAppMutation()
	const handeleCopyBtn = (token: any) => {
		navigator.clipboard.writeText(token)
	}
	return (
		<Card className="w-[60vw] dark:bg-white border-none ">

			<div className="flex flex-col items-center pb-10 m-4">
				<h5 className="text-2xl text-right font-meduim mb-8 dark:text-gray-700">
					{app?.appName} Details
				</h5>
				<div className="grid grid-flow-row-dense grid-cols-3 gap-4 grid-rows-3 m-8">
					<div className="m-4 p-0">
						<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">
							ID
						</h1>
						<p className="text-zinc-700 font-bold border-b-4 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">
							{app?._id}
						</p>
					</div>
					<div className="m-4 p-0">
						<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">
							Application status
						</h1>
						<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">
							{app?.status}
						</p>
					</div>
					<div className="m-4 p-0">
						<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">
							Created date
						</h1>
						<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">
							{app?.createdAt.toString()}
						</p>
					</div>

					<div className="m-4 p-0">
						<h1 className="text-white bg-gray-600 p-4 rounded text-xl dark:bg-white dark:text-teal-800">
							App Description
						</h1>
						<p className="text-zinc-700 font-bold border-b-4 bg-blue-100 mt-4 rounded shadow-lg p-5 dark:text-white border-none dark:bg-gray-700">
							{app?.description}
						</p>
					</div>
					<div className="m-4 p-0 col-span-3 p-2 m-4">
						<div>
							<label className="block mb-2 text-white bg-gray-600 rounded text-lg  dark:bg-white dark:text-teal-800">
								Token
							</label>
							<div className="flex gap-4">
								<input
									type=""
									name=""
									id=""
									placeholder="URERHKJQWEGASGSG1234324534324AD"
									value={app?.token}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
								></input>

								<button
									type="button"
									onClick={() => handeleCopyBtn(app?.token)}
									className="text-white bg-teal-800 p-4 rounded"
								>
									Copy
								</button>
								<button
									type="button"
									onClick={() => {
										hook(app?._id)
										if (isLoading) return "loading..."
										if (isSuccess) {
											navigate("/allApplication")
										}
									}}
									className="text-white bg-red-600 text-md w-36 rounded py-4"
								>
									Delete App
								</button>
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</Card>

		// return content;
	)
};

// 66d3dc53-1818-4010-ab33-133d15b18222

export default AppDetails
