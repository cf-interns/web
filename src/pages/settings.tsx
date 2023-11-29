import thumbnail from "../assets/avatar.jpeg"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"
import { Button, Avatar, Label, TextInput } from "flowbite-react"
// import Link from 'next/link';
import { useChangePasswordMutation } from "../store/features/user/usersApiSlice"
import { Link } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"
import CustomLoader from "../components/CustomLoader"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const Settings = () => {
	const [changePassword, { isLoading }] = useChangePasswordMutation()
	const notifications = useSelector((store: RootState) => store.notification)
	console.log("notifications", notifications)
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
					.required("Please enter the new password"),

				confirmPassword: Yup.string()
					.password()
					.required("Please confirm the new password"),
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
				<div className="flex px-2 divide-x-2 mt-10">
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

				<div className="flex  justify-start mt-10 flex-col  ">
					<div className="flex gap-20 justify-start m-10  ">
						{/* <form className="flex max-w-md flex-col gap-4 bg white bg-white rounded-xl dark:bg-gray-800 h-100 p-20 shadow-md pl-">
				<h1 className=" mb-4 font-extrabold text-3xl text-center text-teal-900 dark:text-white">User Information</h1>
					<div className="flex flex-wrap gap-2 justify-center">
     
      <Avatar rounded />
    </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="User email" />
        </div>
		<Field
												placeholder="email Address"
												id="eamil"
												type=""
												name="email"
												sizing="sm"
												className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-80 p-2"
												color="black"
											/>
												<ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-xs italic"
										/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="first name" />
        </div>
		<Field
												placeholder="first name"
												id="text"
												type=""
												name="text"
												sizing="sm"
												className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-80 p-2"
												color="black"
											/>
												<ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-xs italic"
										/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="User Last name" />
        </div>
		<Field
												placeholder="last name"
												id="text"
												type=""
												name="text"
												sizing="sm"
												className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-80 p-2"
												color="black"
											/>
												<ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-xs italic"
										/>
		
      </div>
        
      <div className="flex items-center gap-2 rounded-md">
   
        <Label htmlFor="agree" className="flex">
    
          <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
           </Link>
        </Label>
      </div>
	  <button type="submit"  className="bg-teal-500 text-black  hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-900 hover:border-teal-900 rounded w-80 bg-red-900  dark:text-white ">
Update User
</button>
    </form> */}

						<Form className="flex max-w-md flex-col gap-4 bg white bg-white rounded-xl dark:bg-gray-800 h-100 p-20 shadow-md  ">
							<h1 className=" mb-4 font-extrabold text-3xl text-center text-teal-900 dark:text-white">
								Change password
							</h1>
							<div className="flex flex-wrap gap-2 justify-center">
								<Avatar rounded />
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="password2" value="Your password" />
								</div>
								<Field
									placeholder="OLd Password"
									id="oldPassword"
									type="oldPassword"
									name="oldPassword"
									sizing="sm"
									className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-80 p-2"
									color="black"
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="repeat-password" value="Repeat password" />
								</div>
								<Field
									placeholder="New Password"
									id="newPassword"
									sizing="sm"
									type="newPassword"
									name="newPassword"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2"
									color="black"
								/>
								<ErrorMessage
									name="newPassword"
									component="div"
									className="text-red-500 text-xs italic"
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="repeat-password" value="confirm password" />
								</div>
								<Field
									placeholder="confirm Password"
									id="confirmPassword"
									sizing="sm"
									type=""
									name="confirmPassword"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2"
									color="gray"
								/>
								<ErrorMessage
									name="confirmPassword"
									component="div"
									className="text-red-500 text-xs italic"
								/>
							</div>
							<div className="flex items-center gap-2">
								<Label htmlFor="agree" className="flex">
									<Link
										to="#"
										className="text-cyan-600 hover:underline dark:text-cyan-500 "
									></Link>
								</Label>
							</div>
							<button
								type="submit"
								onClick={() => console.log("Clicked!!")}
								className="bg-teal-500 text-black  hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-900 hover:border-teal-900 rounded w-80 bg-red-900  dark:text-white "
							>
								Update password
							</button>
						</Form>
					</div>
				</div>
				<div></div>
			</DashboardLayout>
		</Formik>
	)

	return content
}

export default Settings
