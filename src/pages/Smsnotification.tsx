import { Formik } from "formik"

import { useChangePasswordMutation } from "../store/features/user/usersApiSlice"
import DashboardLayout from "../components/DashboardLayout"

const SmsNotification = () => {
	const [changePassword, { isLoading }] = useChangePasswordMutation()

	const content = isLoading ? (
		<h1>Submitting ...</h1>
	) : (
		<Formik
			initialValues={{
				oldPassword: "",
				newPassword: "",
				confirmPassword: "",
			}}
			onSubmit={async (values) => {
				try {
					const data = await changePassword(values).unwrap()
					console.log(data, "USER PASSWORD++++++")
					return data
				} catch (error) {
					console.log(error)
				}
			}}
		>
			<DashboardLayout>
				<h1 className="header">Send SMS</h1>

				<div className="flex flex-col w-[80vw] m-auto p-2 rounded">
					<form
						className="main-container
"
					>
						{" "}
						<div className="mb-6">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								id
							</label>
							<input
								type="text"
								id="id"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								name="id"
							></input>
						</div>
						<div className="mb-6">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Number
							</label>
							<input
								type="number"
								id="number"
								placeholder="1234"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								name="number"
							></input>
						</div>
						<div className="mb-6">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								body
							</label>
							<input
								type="text"
								id="text"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								name="body"
							></input>
						</div>
						<button type="submit" className="btn-btn">
							Send SMS
						</button>
					</form>
				</div>
			</DashboardLayout>
		</Formik>
	)

	return content
}

export default SmsNotification
