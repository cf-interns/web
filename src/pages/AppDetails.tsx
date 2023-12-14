import { Card } from "flowbite-react"
import {
	useGetSpecificAppQuery,
	useDeleteAppMutation,
} from "../store/features/application/appApiSlice"
import { format } from "date-fns"
import { ConfirmDialog } from "primereact/confirmdialog"
import { ToastContainer, toast } from "react-toastify"
import { useState } from "react"

const AppDetails = ({
	id,
	setVisibleDetails,
}: {
	id: string
	setVisibleDetails: (arg: boolean) => void
}) => {
	const [clicked, setClicked] = useState(false)
	const [visible, setVisible] = useState(false)
	const { data: app, isSuccess } = useGetSpecificAppQuery(id)
	const [hook] = useDeleteAppMutation()
	const handeleCopyBtn = (token: string) => {
		navigator.clipboard.writeText(token)
	}
	const date2 = (date: Date) => new Date(date)
	const notifyDeleted = (appName: string) =>
		toast.success(`${appName} Deleted!`)

	const accept = (_id: string, appName: string) => {
		hook(_id)
		notifyDeleted(appName)
		setVisible(false)
		setVisibleDetails(false)
	}

	const reject = () => {}

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
							onClick={() => {
								handeleCopyBtn(app?.token || "")
								setClicked(!clicked)
							}}
							className="text-white bg-teal-800 p-4 rounded"
						>
							{clicked ? "Copied" : "Copy"}
						</button>
						<button
							type="button"
							onClick={() => setVisible(true)}
							className="text-white bg-red-600 text-md w-36 rounded py-4"
						>
							Delete
						</button>
					</div>
					<ToastContainer />
					<ConfirmDialog
						visible={visible}
						onHide={() => setVisible(false)}
						message="Do you want to delete this Application?"
						header="Delete Confirmation"
						icon="pi pi-info-circle mr-2"
						acceptLabel="Confirm"
						rejectLabel="Cancel"
						acceptClassName="mr-2 bg-green-500 text-white py-2 px-4 border border-white"
						rejectClassName="mr-[10px] py-2 px-4 border border-blue-200"
						className="w-[30vw]"
						accept={() => {
							accept(id, app?.appName as string)
						}}
						reject={reject}
					/>
				</div>
			</div>
		</Card>
	)
}

export default AppDetails
