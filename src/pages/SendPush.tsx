import { useFormik } from "formik"
import {
	useSendAutomaticPushMessageMutation,
	useSendPushMutation,
} from "../store/features/application/appApiSlice"
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
	const notifyAppStatus = () => toast.error("Please Activate your Application")
	const notifyInvalidToken = () => toast.error("Invalid Recipient Token")
	const notifyTokens = () => toast.error("Please enter Recipient Token(s)")

	const [sendPush] = useSendPushMutation()
	const [sendAutoPush] = useSendAutomaticPushMessageMutation()
	const app = useSelector((store: RootState) => store.app.app)
	const useFullData = app?.map((app) => {
		return {
			name: app.appName,
			token: app.token,
		}
	})
	const [fcmTokens, setFcmTokens] = useState<string[]>([])
	const onTokenAdd = () => {
		const actualTokens = [...fcmTokens]
		actualTokens.push(formik.values.userToken)
		setFcmTokens(actualTokens)
		formik.setFieldValue("userToken", "")
	}
	const formik = useFormik({
		initialValues: {
			token: "",
			notification: {
				body: "",
				title: "",
				// icon: ''
			},
			userToken: "",
			time: "",
			toggleAutomatic: false,
		},
		validationSchema: Yup.object({
			notification: Yup.object({
				body: Yup.string().required('Message required!'),
				title: Yup.string().required('Title required')
			}).required(),
			// userToken: Yup.string().required("Please enter recipient's token"),
			token: Yup.string().required("Please choose an application"),
			
			toggleAutomatic: Yup.boolean(),
			time: Yup.date()
				.min(new Date(), "Minimum date is today")
				.when("toggleAutomatic", (toggleAutomatic, schema) =>
					toggleAutomatic[0]
						? schema.required("Time and Date is required!")
						: schema
				),
		}),
		onSubmit: async (values) => {
			console.log("UserToken?", values)

			try {
				if (fcmTokens.length > 0 || values.userToken) {
					let fcmTokens2 = fcmTokens
					if (fcmTokens.length === 0) fcmTokens2 = [values.userToken]
					else fcmTokens2 = fcmTokens
					const inputs = {
						id: selectedApplication?.token,
						notification: {
							body: values?.notification.body,
							title: values?.notification.title,
						},
						userToken: fcmTokens2,
						time: values?.time,
					}
					if (values.toggleAutomatic) {
						console.log("UserToken?", inputs)

						const data = await sendAutoPush(inputs).unwrap()
						notifySucess()
						setFcmTokens([])
						formik.resetForm()

						return data
					}
					console.log("UserToken?", inputs)

					const data = await sendPush(inputs).unwrap()
					notifySucess()
					formik.resetForm()
					return data
				} else notifyTokens()
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				if (error?.data.message === "Please Activate Your App!") {
					return notifyAppStatus()
				}

				if (error?.data.message === "Invalid FCM registration token") {
					return notifyInvalidToken()
				}

				notifyError()
				console.log(error, "ERRRRRRR")
				return error
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
					<div className="flex flex-col justify-center mt-32">
						<h1 className="text-center text-2xl font-bold p-4">
							Send Push Notification
						</h1>
						<form
							onSubmit={formik.handleSubmit}
							className="bg-white rounded px-8 pt-6 pb-8 mb-4  "
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
								{formik?.errors?.token && formik.touched.token && (
									<div className="text-red-800 text-xs italic mt-2">
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
								{formik?.errors?.notification?.body &&
									formik.touched.notification?.body && (
										<div className="text-red-800 text-xs italic mt-2">
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
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline "
									id="notification.title"
									type="text"
									placeholder="Enter Push Title"
									name="notification.title"
									value={formik.values.notification.title}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								{formik?.errors?.notification?.title &&
									formik.touched.notification?.title && (
										<div className="text-red-800 text-xs italic mt-2">
											{formik?.errors?.notification.title}
										</div>
									)}
							</div>
							<div className="flex gap-5">
								{fcmTokens.map((num) => (
									<div
										className="rounded-full bg-gray-300 w-fit p-2 px-4 shadow-lg mb-2 none group "
										id="numberTip"
									>
										{num}
									</div>
								))}
							</div>
							<div className="mb-4">
								<Label
									color="text-dark"
									htmlFor="Recipient's token"
									value="Recipient's token"
									className="text-xl text-center p-1"
								/>
								<div className="flex gap-4 pt-2">
									<input
										className="shadow appearance-none border rounded-lg w-fit  text-grey-darker text-xl leading-tight focus:outline-none focus:shadow-outline h-fit"
										id="userToken"
										type="text"
										placeholder="Enter User token"
										name="userToken"
										value={formik.values.userToken}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									{/* 	{formik?.errors?.tokens && formik.touched.tokens && (
									<div className="text-red-800 text-xs italic text-center">
										{formik?.errors?.tokens}
									</div>
								)} */}
									<button
										className="rounded-lg bg-gray-800 hover:bg-green-500 w-fit p-2 text-white group-hover:block"
										onClick={onTokenAdd}
										type="button"
									>
										Add
									</button>
								</div>
							</div>
							<div className="flex flex-col gap-4 pt-2 mb-4">
								<div className="flex gap-2 items-center">
									<input
										type="checkbox"
										className=""
										name="automatic"
										id="automatic"
										onClick={() =>
											formik.setFieldValue(
												"toggleAutomatic",
												!formik.values.toggleAutomatic
											)
										}
									/>
									<Label
										color="text-dark"
										htmlFor="automatic"
										value="Send Push Notification Later"
										className="text-xl text-center p-1"
									/>
								</div>
								{formik.values.toggleAutomatic && (
									<div className="mb-4">
										<Label
											color="text-dark"
											htmlFor="Date & Time"
											value="Date & Time"
											className="text-xl text-center p-1"
										/>
										<input
											className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-fit"
											id="time"
											type="datetime-local"
											placeholder="Enter email subject"
											name="time"
											value={formik.values.time}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
										{formik?.errors?.time && (
											<div className="text-red-800 text-xs italic mt-2">
												{formik?.errors?.time}
											</div>
										)}
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
					</div>

					<ToastContainer />
				</div>
			</div>
		</DashboardLayout>
	)
}

export default SendPush
