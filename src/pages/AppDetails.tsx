// import { Card, Dropdown } from 'flowbite-react';
import { Card } from "flowbite-react"
import {
	useGetSpecificAppQuery,
	useDeleteAppMutation,
} from "../store/features/application/appApiSlice"
import { useNavigate } from "react-router-dom"
import { format } from "date-fns"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppDetails = (id: any) => {
	const navigate = useNavigate()
	// const { id } = useParams()
	const { data: app, isSuccess } = useGetSpecificAppQuery(id?.id)
	const [hook, ] = useDeleteAppMutation()
	const handeleCopyBtn = (token: string) => {
		navigator.clipboard.writeText(token)
	};
	const date2 = (date: Date) => new Date(date);

	console.log("TEST", app?._id)
	return (
		<Card className="w-[30vw] dark:bg-white border-none">
			<div className="flex flex-col items-center">
				<h5 className="text-2xl text-right font-meduim mb-8 dark:text-gray-700">
					{app?.appName} Details
				</h5>
				<div className="w-full flex justify-between">
					<div className="m-4 p-0">
						<h1 className="text-gray-700">ID</h1>
						<p className="font-bold">{app?._id}</p>
					</div>
					<div className="m-4 p-0">
						<h1 className="text-gray-700">Application status</h1>
						<p className="font-bold">{app?.status}</p>
					</div>
					<div className="m-4 p-0">
						<h1 className="text-gray-700">Created date</h1>
						<p className="font-bold">
							{/* {app?.createdAt.toString()} */}
							{isSuccess ? (
								<>
									{format(
										date2(app?.createdAt as Date),
										"MMMM do yyyy, h:mm:ss a"
									) || app?.createdAt.toDateString()}
								</>
							) : (
								app?.createdAt.toString()
							)}
						</p>
					</div>
				</div>
				<div className="mt-5 w-full">
					<p className="text-gray-700">{app?.description}</p>
				</div>
				<div className="w-full  m-4 p-0 col-span-3">
					<label className="block mb-2 rounded text-lg text-gray-700">
						Token
					</label>
					<div className="flex gap-4">
						<input
							type=""
							name=""
							id=""
							placeholder="URERHKJQWEGASGSG1234324534324AD"
							value={app?.token}
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
						></input>

						<button
							type="button"
							onClick={() => handeleCopyBtn(app?.token || "")}
							className="text-white bg-teal-800 p-4 rounded"
						>
							Copy
						</button>
						<button
							type="button"
							onClick={() => {
								hook(app?._id)
								// if (isLoading) return "loading..."
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
				<div></div>
			</div>
		</Card>

		// return content;
	)
}

// 66d3dc53-1818-4010-ab33-133d15b18222

export default AppDetails
