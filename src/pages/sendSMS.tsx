import { useFormik } from "formik"
import {
	useSendAutomaticSMSMutation,
	useSendSMSMutation,
} from "../store/features/application/appApiSlice"
import * as Yup from "yup"
import { Label } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"
import { Dropdown } from "primereact/dropdown"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Link } from "react-router-dom"
// import BreadCrumbs from "../components/BreadCrumbs"

export interface AppData {
	name: string
	token: string
}

const SendSMS = () => {
	const [sendSMS, { isLoading /* isSuccess */ }] = useSendSMSMutation()
	const [sendAutoSMS] = useSendAutomaticSMSMutation()

	const notifySucess = () => toast.success("SMS Sent!")
	const notifyError = () => toast.error("SMS Not Sent!")
	const notifyErrorNumbers = () => toast.error("Please enter a number!")

	/* 
	1- Get Apps
	2- Show in Dropdown
	3- Send Selected App on Form Submission!
	
	*/
	const [selectedApplication, setSelectedApplication] = useState<AppData>()
	const [toggleAutomatic, setoggleAutomatic] = useState(false)

	const [numbers, setNumbers] = useState<string[]>([])
	const onAddNumber = () => {
		const actualNumbers = [...numbers]
		actualNumbers.push(formik.values.mobiles)
		setNumbers(actualNumbers)
		formik.setFieldValue("mobiles", "")
	}
	const formateDate = (date: string | Date) => new Date(date).toISOString()

	const formik = useFormik({
		initialValues: {
			token: "",
			message: "",
			mobiles: "",
			time: "",
		},

		validationSchema: Yup.object({
			message: Yup.string().required("Please enter your message"),
			token: Yup.string().required("Please choose an application"),
			time: Yup.date()
				// .required()
				.min(
					Yup.ref("time"),
					({ min }) => `Date needs to be after ${formateDate(min)}!!`
				),
		}),
		onSubmit: async (values) => {
			try {
				if (numbers.length > 0 || values.mobiles) {
					let mobileValues = numbers

					if (numbers.length === 0) mobileValues = [values.mobiles]
					else mobileValues = numbers

					const inputs = {
						message: values?.message,
						mobiles: mobileValues.toString(),
						id: selectedApplication?.token,
						time: values?.time,
					}

					if (toggleAutomatic) {
						const data = await sendAutoSMS(inputs).unwrap()
						notifySucess()
						setNumbers([])

						return data
					} else {
						const data = await sendSMS(inputs).unwrap()
						notifySucess()
						setNumbers([])

						return data
					}
				} else notifyErrorNumbers()
			} catch (error) {
				notifyError()
				console.log(error)
			}
		},
	})

	const app2 = useSelector((store: RootState) => store.app.app)
	const useFullData = app2?.map((app) => {
		return {
			name: app.appName,
			token: app.token,
		}
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

			{/* <div className="flex items-center p-2">
				<BreadCrumbs />
				<h1 className="text-2xl">SMS</h1>
			</div> */}
			<div className="flex justify-center w-[55vw] m-auto">
				<div className="w-[70vw] h-auto">
					<form
						onSubmit={formik.handleSubmit}
						className="bg-white rounded px-8 pt-6 pb-8 mb-4 my-32 "
						style={{ boxShadow: "71px 38px 50px 22px rgba(0,0,0,0.1)" }}
					>
						<div mb-4>
							<Label
								color="text-dark"
								htmlFor="Application"
								value="App"
								className="text-xl text-center p-1"
							/>
							<Dropdown
								value={selectedApplication}
								onChange={(e) => onApplicationChange(e.value)}
								options={useFullData}
								optionLabel="name"
								placeholder="Select An App"
								// type="token"
								name="token"
								id="token"
								className="w-full md:w-14rem"
							/>

							{formik?.errors?.token && (
								<div className="text-red-700 font-bold">
									{formik?.errors?.token}
								</div>
							)}
						</div>
						<div className="my-4">
							<Label
								color="text-dark"
								htmlFor="text"
								value="Message"
								className="text-xl text-center p-1"
							/>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
								id="message"
								type="text"
								placeholder="Enter Message"
								name="message"
								// sizing="lg"
								value={formik.values.message}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik?.errors?.message && (
								<div className="text-red-700 font-bold">
									{formik?.errors?.message}
								</div>
							)}
						</div>
						<div className="flex gap-5">
							{numbers.map((num) => (
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
								htmlFor="address"
								value="Mobile Number(s)"
								className="text-xl text-center p-1"
							/>
							<div className="flex gap-4 pt-2">
								<input
									className="shadow appearance-none border rounded-lg w-fit  text-grey-darker text-xl leading-tight focus:outline-none focus:shadow-outline h-fit"
									id="mobiles"
									placeholder="Enter mobile number"
									name="mobiles"
									value={formik.values.mobiles}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<button
									className="rounded-lg bg-gray-800 hover:bg-green-500 w-fit p-2 text-white group-hover:block"
									type="button"
									onClick={onAddNumber}
								>
									Add
								</button>
							</div>

							{numbers.length === 0 && (
								<div className="text-red-700 font-bold">{}</div>
							)}
						</div>
						<div className="flex flex-col gap-4 pt-2 mb-4">
							<div className="flex gap-2 items-center">
								<input
									type="checkbox"
									className=""
									name="automatic"
									id="automatic"
									onClick={() => setoggleAutomatic(!toggleAutomatic)}
								/>
								<Label
									color="text-dark"
									htmlFor="automatic"
									value="Send Automatic Notification"
									className="text-xl text-center p-1"
								/>
							</div>
							{toggleAutomatic && (
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
										<div className="text-red-800 text-xs italic text-center">
											{formik?.errors?.time}
										</div>
									)}
								</div>
							)}
							{formik?.errors?.time && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.time}
								</div>
							)}
						</div>

						<button
							disabled={isLoading}
							type="submit"
							style={{ backgroundColor: "rgb(31 41 55 / 1)" }}
							className="self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300"
						>
							{isLoading ? "Submitting..." : "Submit"}
						</button>
					</form>
					<ToastContainer />
				</div>
			</div>
		</DashboardLayout>
	)
}

export default SendSMS
