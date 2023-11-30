import { useFormik } from "formik"
import { useSendSMSMutation } from "../store/features/application/appApiSlice"
import * as Yup from "yup"
import { Label } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"
import { Dropdown } from "primereact/dropdown"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"


import { useSelector } from "react-redux"
import { RootState } from "../store/store"

interface AppData {
	name: string
	token: string
}

const SendSMS = () => {
	const [sendSMS, { isLoading /* isSuccess */ }] = useSendSMSMutation()

	const notifySucess = () => toast.success("SMS Sent!")

	/* 
	1- Get Apps
	2- Show in Dropdown
	3- Send Selected App on Form Submission!
	
	*/
	const [selectedApplication, setSelectedApplication] = useState<AppData>()

	const formik = useFormik({
		initialValues: {
			token: "",
			message: "",
			mobiles: "",
		},

		validationSchema: Yup.object({
			message: Yup.string().required("Please enter your message"),
			mobiles: Yup.number().required("Please Enter Phone number"),
			token: Yup.string().required("Please choose an application"),
		}),
		onSubmit: async (values) => {
			try {
				const inputs = {
					message: values?.message,
					mobiles: values?.mobiles,
					id: selectedApplication?.token,
				}

				const data = await sendSMS(inputs).unwrap();
					notifySucess()

				return data
			} catch (error) {
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

						<div className="mb-4">
							<Label
								color="text-dark"
								htmlFor="address"
								value="Mobile Number(s)"
								className="text-xl text-center p-1"
							/>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]"
								id="mobiles"
								type="text-area"
								placeholder="Enter mobile number"
								name="mobiles"
								value={formik.values.mobiles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>

							{formik?.errors?.mobiles && (
								<div className="text-red-700 font-bold">
									{formik?.errors?.mobiles}
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
