import { Button, Label, TextInput } from "flowbite-react"
import thumbnail from "../assets/avatar.jpeg"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"

import { useChangePasswordMutation } from "../store/features/user/usersApiSlice"
import { Link } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"

const Settings = () => {
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
			validationSchema={Yup.object({
				oldPassword: Yup.string()
					.password()
					.required("Previous Password is required!"),
				newPassword: Yup.string()
					.password()
					.required("Please enter the new password")
					.max(25)
					.min(9)
					.minUppercase(1, "Must contain atleast 1 uppercase letter")
					.minLowercase(1, "Must contain atleast 1 lowercase letter")
					.minNumbers(1, "Must cantain atleast 1 number")
					.minSymbols(1, "Must contain atleast 1 symbol"),
			})}
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
				<div className="flex px-2 divide-x-2 mt-8">
					<h1 className="text-[#5a5c69] text-[28px] leading-[34px] px-4 font-normal cursor-pointer ml-6">
						Account Settings
					</h1>

					<nav className="flex px-4" aria-label="Breadcrumb">
						<ol className="inline-flex items-center space-x-1 md:space-x-3">
							<li className="inline-flex items-center">
								<Link
									to="/dashboard"
									className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 dark:text-gray-400"
								>
									<svg
										className="w-3 h-3 mr-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
									</svg>
									Home
								</Link>
							</li>
							<li>
								<div className="flex items-center">
									<svg
										className="w-3 h-3 text-gray-400 mx-1"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
									<span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">
										Settings
									</span>
								</div>
							</li>
							<li aria-current="page">
								<div className="flex items-center">
									<svg
										className="w-3 h-3 text-gray-400 mx-1"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
									<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
										Account Settings
									</span>
								</div>
							</li>
						</ol>
					</nav>
				</div>
				{/* <h1 className='text-2xl font-bold p-2 text-start ml-[54px]'>Account Settings</h1> */}

				<div className="flex flex-col w-[80vw] mt-20 ml-10 p-2 rounded">
					<div className="flex flex-col w-[60vw] m-auto p-2 rounded">
						<div className=" h-[50%]" id="userInfo">
							<h1 className="text-md p-2">User Settings</h1>
							<div className="flex justify-evenly items-center p-2 m-auto h-[95%] gap-10 bg-white rounded-xl">
								<div className="">
									<img src={thumbnail} className="rounded" alt="" />
								</div>
								<div></div>
								<div className="">
									<form className="flex flex-col gap-2 w-[60vw]">
										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="firstName"
												value="First Name"
												color="text-dark"
												className="text-sm"
											/>
											<TextInput
												placeholder="John"
												sizing="sm"
												style={{ backgroundColor: "white" }}
											/>
										</div>

										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="firstName"
												value="Last Name"
												color="text-dark"
												className="text-sm"
											/>
											<TextInput
												placeholder="John"
												sizing="sm"
												style={{ backgroundColor: "white" }}
											/>
										</div>

										<div className="flex flex-col gap-2 w-80">
											<Label
												htmlFor="firstName"
												value="Email"
												color="text-dark"
												className="text-sm mr-8"
											/>
											<TextInput
												placeholder="John"
												sizing="sm"
												style={{ backgroundColor: "white" }}
											/>
										</div>

										<Button
											size="sm"
											className="w-full rounded-md self-center p-2 m-2 text-green-200"
											style={{ backgroundColor: "rgb(31 41 55 / 1" }}
										/>
										<h6 className="text-white hover:text-white">Upadat Info</h6>
										<Button
											size="sm"
											className="w-full rounded-md p-2 m-2 text-green-200 w-80"
											color="green"
										>
											<h6 className="text-black">Update Info</h6>
										</Button>
									</form>
								</div>
							</div>
						</div>

						<br />

						<div id="changePassword" className="h-[50%] bg-white rounded-xl">
							<h1 className="text-md p-2">Change Password</h1>
							<div className="flex justify-evenly items-center p-2 m-auto h-[95%] gap-32">
								<div className="">
									<img src={thumbnail} className="rounded" alt="" />
								</div>
								<div className="grow">
									<Form className="flex flex-col gap-2 w-[60vw]">
										<div className="flex flex-col gap-2 whitespace-nowrapp w-80">
											<Label
												htmlFor="Old Password"
												value="Old Password"
												color="text-dark"
												className="text-sm "
											/>
											<Field
												placeholder="John"
												id="oldPassword"
												type="oldPassword"
												name="oldPassword"
												sizing="sm"
												className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
												color="black"
											/>
										</div>
										<ErrorMessage
											name="oldPassword"
											component="div"
											className="text-red-500 text-xs italic"
										/>

										<div className="flex flex-col gap-2 whitespace-nowrapp w-80">
											<Label
												htmlFor="New Password"
												value="New Password"
												color="text-dark"
												className="text-sm "
											/>
											<Field
												placeholder="Jokjjk%43!=hn"
												id="newPassword"
												sizing="sm"
												type="newPassword"
												name="newPassword"
												className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
												color="black"
											/>
											<Field
												placeholder=".................."
												id="newPassword"
												sizing="sm"
												type="newPassword"
												name="newPassword"
												className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
												color=""
											/>
										</div>
										<ErrorMessage
											name="newPassword"
											component="div"
											className="text-red-500 text-xs italic"
										/>

										<Button
											as="button"
											type="submit"
											size="sm"
											className="w-full rounded-md self-center p-2 m-2 text-green-200"
											style={{ backgroundColor: "rgb(31 41 55 / 1" }}
										/>
										<h6 className="text-white hover:text-white">
											Change Password
										</h6>

										<Button
											as="button"
											type="submit"
											size="sm"
											className="w-full rounded-md p-2 m-2 text-green-200 w-80"
											color="green"
										>
											<h6 className="text-black">Change Password</h6>
										</Button>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</Formik>
	)

	return content
}

export default Settings
