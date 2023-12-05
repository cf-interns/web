import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useSendAutomaticEmailMutation } from "../store/features/application/appApiSlice";
import { ToastContainer, toast } from "react-toastify";
import { Label } from "flowbite-react";
import { Dropdown } from "primereact/dropdown";
import DashboardLayout from "../components/DashboardLayout";
import { AppData } from "./sendSMS";


const AutoNotifications = () => {
    const notifySucess = () => toast.success("Automatic Notification Created!")
	const notifyError = () => toast.error("Automatic Notification Not Created")
	const notifyErrorEmails = () => toast.error("Please enter a number!")

enum AutoNotifications {

	SMS = "SMS",
	EMAIL = "EMAIL",
	PUSH = "PUSH",
}  
const onEmailAdd = () => {
	const actualEmails = [...emails]
	actualEmails.push(formik.values.to)
	setEmails(actualEmails)
	formik.setFieldValue("to", "")
}

const [emails, setEmails] = useState<string[]>([])
const app = useSelector((store: RootState) => store.app.app);
const [selectedApplication, setSelectedApplication] = useState<AppData>()
const useFullData = app?.map((app) => {
		return {
			name: app.appName,
			token: app.token,
		}
});
const [sendAutoEmail, {isLoading}] = useSendAutomaticEmailMutation();

const formik = useFormik({
	initialValues: {
		token: "",
		text: "",
		subject: "",
		to: "",
		from: "no-reply@payunit.com",
        time: ''
	},
	validationSchema: Yup.object({
		text: Yup.string().required("Message is required"),

		subject: Yup.string().required("Please enter the email subjcet"),

		token: Yup.string().required("Please choose an application"),
        time: Yup.date().required('Please enter the date & time for sending this notification')
	}),
	onSubmit: async (values) => {
		try {
			if (emails.length > 0 || values.to) {
				let email2 = emails

				if (emails.length === 0) email2 = [values.to]
				else email2 = emails

				const inputs = {
					id: selectedApplication?.token,
					text: values?.text,
					subject: values?.subject,
					to: email2,
					from: "no-reply@payunit.com",
                    time: values?.time
				}
				const data = await sendAutoEmail(inputs).unwrap();
                notifySucess()
				return data
			} else notifyErrorEmails()
		} catch (error) {
			notifyError()
			console.log(error)
		}
	},
});
const onApplicationChange = (selectedApp: AppData) => {
	setSelectedApplication(selectedApp)
	formik.setFieldValue("token", selectedApp?.token)
}


/* 

1- Get Automatic notifications types
2- Select Application to send notification
3- Fill Required Form 

*/

  return (
		<DashboardLayout>
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
								placeholder="Select an App"
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
								className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
								id="text"
								type="text"
								placeholder="Enter Message"
								name="text"
								value={formik.values.text}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>

							{formik?.errors?.text && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.text}
								</div>
							)}
						</div>
						<div className="mb-4">
							<Label
								color="text-dark"
								htmlFor="subject"
								value="Subject"
								className="text-xl text-center p-1"
							/>
							<input
								className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-fit"
								id="subject"
								type="text"
								placeholder="Enter email subject"
								name="subject"
								value={formik.values.subject}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik?.errors?.subject && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.subject}
								</div>
							)}
						</div>
						<div className="flex gap-5">
							{emails.map((num) => (
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
								value="Address"
								className="text-xl text-center p-1"
							/>
							<div className="flex gap-4 pt-2">
								<input
									className="shadow appearance-none border rounded-lg w-fit  text-grey-darker text-xl leading-tight focus:outline-none focus:shadow-outline h-fit"
									id="to"
									type="text"
									placeholder="Enter email adress"
									name="to"
									value={formik.values.to}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<button
									className="rounded-lg bg-gray-800 hover:bg-green-500 w-fit p-2 text-white group-hover:block"
									onClick={onEmailAdd}
									type="button"
								>
									Add
								</button>
							</div>
							{/* {formik?.errors?.to && (
								<div className="text-red-800 text-xs italic text-center">
									{formik?.errors?.to}
								</div>
							)} */}
						</div>
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

						<button
							type="submit"
							style={{ backgroundColor: "rgb(31 41 55 / 1)" }}
							disabled={isLoading}
							className="self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300"
						>
							{isLoading ? "Submitting ..." : "Submit"}
						</button>
					</form>
					<ToastContainer />
				</div>
			</div>
		</DashboardLayout>
	)
}

export default AutoNotifications