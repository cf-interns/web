import { useFormik } from "formik"
import {
	useSendAutomaticEmailMutation,
	useSendEmailMutation,
} from "../store/features/application/appApiSlice"
import * as Yup from "yup"
import { Label } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Dropdown } from "primereact/dropdown"
import { AppData } from "./sendSMS"
import { ToastContainer, toast } from "react-toastify"
import { formatISO } from "date-fns"
import { Editor } from "@tinymce/tinymce-react"

const SendEmail = () => {
	const [sendEmail, { isLoading }] = useSendEmailMutation()
	const [sendAutoEmail] = useSendAutomaticEmailMutation()
	const [selectedApplication, setSelectedApplication] = useState<AppData>()
	const notifySucess = () => toast.success("Email Sent!")
	const notifyError = () => toast.error("Email Not Sent!")
	const notifyErrorEmails = () =>
		toast.error("Please enter a valid email address!")
	const notifyErrorAppStatus = () =>
		toast.error("Please Activate your Application!")

	const app = useSelector((store: RootState) => store.app.app)
	const [emails, setEmails] = useState<string[]>([])

	const isValidEmail = (email: string) => {
		const schema = Yup.string().email("Invalid email address").required()

		return schema.isValidSync(email)
	}
	const onEmailAdd = () => {
		const actualEmails = [...emails]
		if (isValidEmail(formik.values.to)) {
			actualEmails.push(formik.values.to)
			setEmails(actualEmails)
			formik.setFieldValue("to", "")
			return
		}
		toast.error("Invalid email")
	}

	const useFullData = app?.map((app) => {
		return {
			name: app.appName,
			token: app.token,
		}
	})
	const formik = useFormik({
		initialValues: {
			token: "",
			message: "",
			subject: "",
			to: "",
			from: "no-reply@payunit.com",
			time: "",
			toggleAutomatic: false,
			text: ''
		},
		validationSchema: Yup.object({
			message: Yup.string().required("Message is required"),
			toggleAutomatic: Yup.boolean(),
			subject: Yup.string().required("Please enter the email subject"),
			// to: Yup.array().of(Yup.string().email("email is required")),
			to: Yup.string().email("email is required"),
			token: Yup.string().required("Please choose an application"),
			time: Yup.date()
				.min(new Date(), "Minimum date is today")
				.when("toggleAutomatic", (toggleAutomatic, schema) =>
					toggleAutomatic[0]
						? schema.required("Time and Date is required!")
						: schema
				),
		}),
		onSubmit: async (values) => {
			try {
				if (emails.length > 0 || values.to) {
					let email2 = emails

					if (emails.length === 0) email2 = [values.to]
					else email2 = emails

					const time = values?.time
						? formatISO(new Date(values?.time))
						: values?.time
					const inputs = {
						id: selectedApplication?.token,
						html: values?.message,
						subject: values?.subject,
						to: email2,
						from: "no-reply@payunit.com",
						time,
						text: values?.text,
					}
					if (values.toggleAutomatic) {
						const data = await sendAutoEmail(inputs).unwrap()
						notifySucess()
						setEmails([])
						formik.resetForm()
					setSelectedApplication({} as AppData)

						return data
					}
					const data = await sendEmail(inputs).unwrap()
					notifySucess()
					formik.resetForm()
					setEmails([])
					setSelectedApplication({} as AppData);
					return data
				} else notifyErrorEmails()
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				if (error?.data.message === "Please Activate Your App") {
					return notifyErrorAppStatus()
				}
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
			<div className="flex justify-center w-[90vw] ">
				<div className="w-[70vw] h-auto">
					<div className="flex flex-col justify-center mt-12">
						<h1 className="text-center text-2xl font-bold p-4 ml-32">
							Send Email Notification
						</h1>

						<form
							onSubmit={formik.handleSubmit}
							className="bg-white rounded px-8 pt-6 pb-8 ml-36"
							style={{ boxShadow: "71px 38px 50px 22px rgba(0,0,0,0.1)" }}
						>
							<div className="mb-4">
								<Label
									color="text-dark"
									htmlFor="text"
									value="Select Application"
									className="text-xl text-center p-1"
								/>
								<Dropdown
									value={selectedApplication}
									onChange={(e) => onApplicationChange(e.value)}
									options={useFullData}
									optionLabel="name"
									placeholder="Select an Application"
									name="token"
									id="token"
									className="w-full md:w-14rem mt-2"
								/>

								{formik?.errors?.token && formik.touched.token && (
									<div className="text-red-800 text-xs italic mt-2">
										{formik?.errors?.token}
									</div>
								)}
							</div>

							<div className="flex gap-5">
								{emails.map((num, i) => (
									<div
										className="rounded-full bg-gray-300 w-fit p-2 px-4 shadow-lg mb-2 none group "
										id="numberTip"
										key={i}
									>
										{num}
									</div>
								))}
							</div>
							<div className="mb-4">
								<Label
									color="text-dark"
									htmlFor="address"
									value="Email(s)"
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
										checked={formik.values.toggleAutomatic}
									/>
									<button
										className="rounded-lg bg-gray-800 hover:bg-green-500 w-fit p-2 text-white group-hover:block"
										onClick={onEmailAdd}
										type="button"
									>
										Add
									</button>
								</div>
								{formik?.errors?.to && (
									<div className="text-red-800 text-xs italic mt-2">
										{formik?.errors?.to}
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
								{formik?.errors?.subject && formik.touched.subject && (
									<div className="text-red-800 text-xs italic mt-2">
										{formik?.errors?.subject}
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
								{/* <input
									className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
									id="message"
									type="text"
									placeholder="Enter Message"
									name="message"
									value={formik.values.message}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/> */}
								<Editor
									apiKey="z8r95hhxmeba9a5a9allv0azbek7pm5j7870qjc6533gdzpq"
									init={{
										plugins:
											"ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
										toolbar:
											"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
										tinycomments_mode: "embedded",
										tinycomments_author: "Author name",
										// mergetags_list: [
										// 	{ value: "First.Name", title: "First Name" },
										// 	{ value: "Email", title: "Email" },
										// ],

										// eslint-disable-next-line @typescript-eslint/no-explicit-any
										ai_request: (request: any, respondWith: any) =>
											respondWith.string(() =>
												Promise.reject("See docs to implement AI Assistant")
											),
									}}
									id="message"
									tagName="message"
									textareaName="message"
									value={formik.values.message}
									// initialValue='Enter'

									onBlur={formik.handleBlur}
									onEditorChange={(value, e) => {
										const str = e.getContent({format: 'text'})
										formik.setFieldValue("message", value);
										formik.setFieldValue("text", str);

									}}
								/>

								{formik?.errors?.message && formik.touched.message && (
									<div className="text-red-800 text-xs italic mt-2">
										{formik?.errors?.message}
									</div>
								)}
							</div>
							<div className="flex flex-col gap-4 pt-2 mb-4">
								<div className="flex gap-2 items-center">
									<input
										type="checkbox"
										className=""
										name="automatic"
										id="automatic"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
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
										value="Send Email Notification Later"
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
								disabled={isLoading}
								className="self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300"
							>
								{isLoading ? "Submitting ..." : "Submit"}
							</button>
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
		</DashboardLayout>
	)
}

export default SendEmail
