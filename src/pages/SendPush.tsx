import { useFormik } from "formik"
import { useSendPushMutation } from "../store/features/application/appApiSlice"
import * as Yup from "yup"
import { Label } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { AppData } from "./sendSMS"
import { Dropdown } from "primereact/dropdown"
import { ToastContainer, toast } from "react-toastify"
import { useState } from "react"
import { Link } from "react-router-dom"

const SendPush = () => {
	const [selectedApplication, setSelectedApplication] = useState<AppData>()
	const notifySucess = () => toast.success("Push Sent!")
	const notifyError = () => toast.error("Push Not Sent!")

	const [sendPush] = useSendPushMutation()
	const app = useSelector((store: RootState) => store.app.app)
	const useFullData = app?.map((app) => {
		return {
			name: app.appName,
			token: app.token,
		}
	})
	const formik = useFormik({
		initialValues: {
			token: "",
			notification: {
				body: "",
				title: "",
				// icon: ''
			},
			 userToken: "",
		},
		validationSchema: Yup.object({
			notification: Yup.object().required(),
			userToken: Yup.string().required("Please enter recipient's token"),
			token: Yup.string().required("Please choose an application"),
		}),
		onSubmit: async (values) => {
			console.log(values, "<<<====token?")

			try {
				const inputs = {
					id: selectedApplication?.token,
					notification: {
						body: values?.notification.body,
						title: values?.notification.title,
					},
					token: values?.userToken,
				}
				const data = await sendPush(inputs)
				console.log(data, "<<<====token?")
				notifySucess()
				return data
			} catch (error) {
				notifyError()
				console.log(error)
			}
		},
	})
	const onApplicationChange = (selectedApp: AppData) => {
		setSelectedApplication(selectedApp)
		formik.setFieldValue("token", selectedApp?.token)
	}
	return (
		<DashboardLayout>
			<Link to={`/tools`}>
				<svg
					className="w-10 ml-20 mt-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
			</Link>

			<div className="flex justify-center w-[90vw] ">
				<div className="w-[70vw] h-auto">
					<form
						onSubmit={formik.handleSubmit}
						className="bg-white rounded px-8 pt-6 pb-8 mb-4 my-32 "
						style={{ boxShadow: "71px 38px 50px 22px rgba(0,0,0,0.1)" }}
					>
						<div className="mb-4">
							<Label
								color="text-dark"
								htmlFor="text"
								value="Message"
								className="text-xl text-center p-1"
							/>
							<Dropdown
								value={selectedApplication}
								onChange={(e) => onApplicationChange(e.value)}
								options={useFullData}
								optionLabel="name"
								placeholder="Select An App"
								name="token"
								id="token"
								className="w-full md:w-14rem"
							/>
							{formik?.errors?.token && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.token}
								</div>
							)}
						</div>
						<div className="mb-4">
							<Label
								color="text-dark"
								htmlFor="text"
								value="Message"
								className="text-xl text-center p-1"
							/>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
								id="notification.body"
								type="text"
								placeholder="Enter Push Message"
								name="notification.body"
								value={formik.values.notification.body}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik?.errors?.notification?.body && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.notification.body}
								</div>
							)}
						</div>
						<div className="mb-4">
							<Label
								color="text-dark"
								htmlFor="subject"
								value="Title"
								className="text-xl text-center p-1"
							/>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]"
								id="notification.title"
								type="text"
								placeholder="Enter Push Title"
								name="notification.title"
								value={formik.values.notification.title}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik?.errors?.notification?.title && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.notification.title}
								</div>
							)}
						</div>
						<div className="mb-4">
							<Label
								color="text-dark"
								htmlFor="Recipient's token"
								value="Recipient's token"
								className="text-xl text-center p-1"
							/>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]"
								id="userToken"
								type="text"
								placeholder="Enter User token"
								name="userToken"
								value={formik.values.userToken}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik?.errors?.userToken && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.userToken}
								</div>
							)}
						</div>

						<button
							type="submit"
							style={{ backgroundColor: "rgb(31 41 55 / 1)" }}
							className="self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300"
						>
							Submit
						</button>
					</form>
					<ToastContainer />
				</div>
			</div>
		</DashboardLayout>
	)
}

export default SendPush
