import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import YupPassword from "yup-password"
import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useSignInMutation } from "../../store/features/auth/authApiSlice"
import { setCredentials } from "../../store/features/auth/authSlice"
import CustomLoader from "../../components/CustomLoader";
import { ToastContainer, toast } from "react-toastify"

YupPassword(Yup)

const Signin = () => {
	const navigate = useNavigate()
	const [login, { isLoading }] = useSignInMutation()
	const dispatch = useDispatch();
	const notifyInvalidLogin = () => toast.error('Invalid Login!')

	// const url = 'http://localhost:5000/api/auth/sign_in'

	const content = isLoading ? (
		<h1>Loading...</h1>
	) : (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={Yup.object({
				email: Yup.string()
					.email("Invalid email address")
					.required("Email Required"),
				password: Yup.string().required("Password Required"),
			})}
			onSubmit={async (values) => {
				try {
					const data = await login(values).unwrap()
					console.log(data)
					dispatch(setCredentials({ ...data, user: data }))
					localStorage.setItem("user", JSON.stringify(data))
					navigate("/dashboard")

					return data
				} catch (error) {
					if (error?.status === 400) {
						notifyInvalidLogin()
					}
					console.log(error)
					//Build Custom Error Messages
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
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Login
							</h1>
							<Form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Email
									</label>
									<Field
										type="email"
										id="email"
										placeholder="test@gns.com"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
										name="email"
									/>
									<ErrorMessage
										name="email"
										component="div"
										className="text-red-500 text-xs italic"
									/>
								</div>
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
									<ErrorMessage
										name="password"
										component="div"
										className="text-red-500 text-xs italic"
									/>
								</div>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									<Button
										color="dark"
										type="submit"
										className="w-full text-black bg-primary-600  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800"
									>
										{isLoading ? (
											<>
												<CustomLoader />
												Loging in...
											</>
										) : (
											"Login "
										)}
									</Button>

									<div className="flex justify-between mt-2">
										<Link
											className="font-medium text-primary-600 hover:underline dark:text-primary-500"
											to="/forgot-password"
										>
											Forgot Password ?
										</Link>
										{/* <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to='/sign-up'>Don't have an Account?</Link>  */}
									</div>
								</p>
							</Form>
							<ToastContainer />
						</div>
					</div>
				</div>
			</section>
		</Formik>
	)

	return content
}

export default Signin
