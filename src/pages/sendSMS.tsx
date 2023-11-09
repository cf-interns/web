import { ErrorMessage, Field, Form, Formik } from "formik"
import { useSendSMSMutation } from "../store/features/application/appApiSlice"
import * as Yup from "yup"
import { Label } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"

const SendSMS = () => {
	const appId = "5eaca9ce-0c40-42f1-9858-d18c6e549c04"
	const [sendSMS, { isLoading /* isSuccess */ }] = useSendSMSMutation()

	return (
		<Formik
			initialValues={{
				id: appId,
				message: "",
				mobiles: "",
			}}
			validationSchema={Yup.object({
				message: Yup.string().required("Please enter your message"),
				mobiles: Yup.number().required("Please Enter Phone number"),
			})}
			onSubmit={async (values) => {
				try {
					const data = await sendSMS(values).unwrap()
					return data
				} catch (error) {
					console.log(error)
				}
			}}
		>
			<DashboardLayout>
				<div className="flex justify-center w-[55vw] m-auto">
					<div className="w-[70vw] h-auto">
						<Form
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
								<Field
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
									id="message"
									type="text"
									placeholder="Enter Message"
									name="message"
									sizing="lg"
								/>
								<ErrorMessage name="text">
									{(msg) => (
										<div className="text-red-800 text-xs italic text-center">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>
							<div className="mb-4">
								<Label
									color="text-dark"
									htmlFor="address"
									value="Mobile Number(s)"
									className="text-xl text-center p-1"
								/>
								<Field
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]"
									id="mobiles"
									as="textarea"
									type="number"
									placeholder="Enter mobile number"
									name="mobiles"
									sizing="lg"
								/>
								<ErrorMessage name="mobiles">
									{(msg) => (
										<div className="text-red-800 text-xs italic text-center">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>

							<button
								disabled={isLoading}
								type="submit"
								style={{ backgroundColor: "rgb(31 41 55 / 1)" }}
								className="self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300"
							>
								{isLoading ? "Submitting..." : "Submit"}
							</button>
						</Form>
					</div>
				</div>
			</DashboardLayout>
		</Formik>
	)
}

export default SendSMS
