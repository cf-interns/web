import * as Yup from "yup"
import YupPassword from "yup-password"
import { Button } from "flowbite-react"
import { Form, Formik, Field, ErrorMessage } from "formik"

import { useNavigate } from "react-router-dom"
import { useResetPasswordMutation } from "../../store/features/auth/authApiSlice"
import CustomLoader from "../../components/CustomLoader"

YupPassword(Yup)

const ResetPassword = () => {
	const navigate = useNavigate()
	const [forgot, { isLoading }] = useResetPasswordMutation()

	const token = window.location.href.split("reset-password/")[1]
	console.log(token, "TOKEN======")

	const content = isLoading ? (
		<h1>Submitting</h1>
	) : (
		<Formik
			initialValues={{
				token: token,
				password: "",
				confirmPassword: "",
			}}
			validationSchema={Yup.object({
				password: Yup.string()
					.password()
					.max(25)
					.min(9)
					.minUppercase(1, "Must contain atleast 1 uppercase letter")
					.minLowercase(1, "Must contain atleast 1 lowercase letter")
					.minNumbers(1, "Must cantain atleast 1 number")
					.minSymbols(1, "Must contain atleast 1 symbol"),
				confrimPassword: Yup.string()
					.password()
					.max(25)
					.min(9)
					.minUppercase(1, "Must contain atleast 1 uppercase letter")
					.minLowercase(1, "Must contain atleast 1 lowercase letter")
					.minNumbers(1, "Must cantain atleast 1 number")
					.minSymbols(1, "Must contain atleast 1 symbol"),
			})}
			onSubmit={async (values) => {
				console.log(values, "TOKEN??")

				try {
					const data = await forgot(values).unwrap()
					navigate("/welcome")
					return data
				} catch (error) {
					console.log(error)
				}
			}}
		>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a
						href="#"
						className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
					>
						<img
							className="w-8 h-8 mr-2"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							alt="logo"
						/>
						GNS
					</a>
					<div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
						<h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Change Password
						</h2>
						<Form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
							{/* <div>
                                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                         <Field type="email" id="email" placeholder="test@gns.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email'/>
                                        <ErrorMessage  name="email"/>
                                     </div> */}
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<Field
									type="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
									name="password"
								/>
								<ErrorMessage name="password" />
							</div>
							<div>
								<label
									htmlFor="confrimPassword"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									confirmPassword
								</label>
								<Field
									type="confirmPassword"
									id="confirmPassword"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
									name="confirmPassword"
								/>
								<ErrorMessage name="confrimPassword" />
							</div>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="newsletter"
										aria-describedby="newsletter"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="newsletter"
										className="font-light text-gray-500 dark:text-gray-300"
									>
										I accept the{" "}
										<a
											className="font-medium text-primary-600 hover:underline dark:text-primary-500"
											href="#"
										>
											Terms and Conditions
										</a>
									</label>
								</div>
							</div>
							<Button
								color="dark"
								type="submit"
								className="w-full text-black bg-primary-600  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								
								{isLoading ? (
											<>
												<CustomLoader />
												Creating an account...
											</>
										) : "Create an account"
										}

							</Button>
							{/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                         Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                     </p> */}
						</Form>
					</div>
				</div>
			</section>
		</Formik>
	)

	return content
}

export default ResetPassword
