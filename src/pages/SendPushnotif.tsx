import { Formik } from "formik"
import { useChangePasswordMutation } from "../store/features/user/usersApiSlice"
import DashboardLayout from "../components/DashboardLayout"

const SendPushNotification = () => {
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
						<h1 className="header">Send Push Notification</h1>

						<div className="flex flex-col w-[80vw] m-auto p-2 rounded">
							<form className="main-container">
								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										id
									</label>
									<input
										type="text"
										id="id"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										placeholder="name@flowbite.com"
										name="Email"
									></input>
								</div>

								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Email
									</label>
									<input
										type="email"
										id="email"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										placeholder="name@flowbite.com"
										name="Email"
									></input>
								</div>
								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										token
									</label>
									<input
										type="text"
										id="text"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										name="token"
									></input>
								</div>
								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										description
									</label>
									<input
										type="text"
										id="description"
										placeholder="description"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										name="description"
									></input>
								</div>
								<button type="submit" className="btn-btn">
									Push Notification
								</button>
							</form>
						</div>
                        </DashboardLayout>
		</Formik>
	)

	return content
}

export default SendPushNotification

