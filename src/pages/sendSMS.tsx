import { useFormik } from "formik"
import { useSendSMSMutation } from "../store/features/application/appApiSlice"
import * as Yup from "yup"
import { Label } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"
import { Dropdown } from "primereact/dropdown"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
// import BreadCrumbs from "../components/BreadCrumbs"

export interface AppData {
	name: string
	token: string
}

const SendSMS = () => {
	const [sendSMS, { isLoading /* isSuccess */ }] = useSendSMSMutation()

	const notifySucess = () => toast.success("SMS Sent!")
	const notifyError = () => toast.error("SMS Not Sent!")
	const notifyErrorNumbers = () => toast.error("Please enter a number!")

	/* 
	1- Get Apps
	2- Show in Dropdown
	3- Send Selected App on Form Submission!
	
	*/
	const [selectedApplication, setSelectedApplication] = useState<AppData>()

	const [numbers, setNumbers] = useState<string[]>([])
	const onAddNumber = () => {
		const actualNumbers = [...numbers]
		actualNumbers.push(formik.values.mobiles)
		setNumbers(actualNumbers)
		formik.setFieldValue("mobiles", "")
	}

	const formik = useFormik({
		initialValues: {
			token: "",
			message: "",
			mobiles: "",
		},

		validationSchema: Yup.object({
			message: Yup.string().required("Please enter your message"),
			token: Yup.string().required("Please choose an application"),
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
					}

					const data = await sendSMS(inputs).unwrap()
					notifySucess()
					setNumbers([])

					return data
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
