
import thumbnail from "../assets/avatar.jpeg"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"
import { Button, Avatar, Label, TextInput } from 'flowbite-react';
// import Link from 'next/link';
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
				email: "",
				firstName: "",
				lastName: "",
			}}
			validationSchema={Yup.object({
				firstName:Yup.string(),
				email: Yup.string()
				.email()
				.required("email must contain @"),
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
					confirmPassword:Yup.string()
					.password()
					.required("Please confirm the new password")
				
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
		

				{/* <div className="flex justify-center">
					<div className="flex flex-col m-auto p-2 rounded">
						<div className=" h-[50%]" id="userInfo">



							<h1 className="text-md p-2">User Settings</h1>
							<div className="flex justify-evenly items-center p-5 m-auto gap-2 bg-white rounded-xl dark:bg-gray-800 ">
								<div className="">
								
								</div>
								<div></div>
								<div className="flex w-[60vw]">
									<form className="flex flex-col gap-2 ">
										<div className="flex flex-col gap-2 whitespace-nowrap ">
											<Label
												htmlFor="firstName"
												value="First Name"
												color="text-dark"
												className="text-sm"
											/>
											<TextInput
												placeholder="Johnstevenson"
												sizing="sm"
												style={{ backgroundColor: "white" }}
											/>
										</div>

										<div className="flex flex-col gap-2 whitespace-nowrap ">
											<Label
												htmlFor="firstName"
												value="Last Name"
												color="text-dark"
												className="text-sm"
											/>
											<TextInput
												placeholder="John@gmail.com"
												sizing="sm"
												style={{ backgroundColor: "white" }}
												
											/>
											
										</div>

										<Button
											size="sm"
											className="w-full rounded-md p-2  mt-5 mb-5 text-green-200 "
											color="green"
										>
											<h6 className="text-black">Update Info</h6>
										</Button>
									</form>
									<div className="text-red-500">hello</div>
								</div>
							</div>
						</div>

						<br />
	                    <h1 className="text-md p-2">Change password</h1>
						<div id="changePassword" className="h-[50%] bg-white dark:bg-gray-800 rounded-xl">
							<div className="flex justify-evenly items-center p-2 m-auto  gap-8">
								<div className="">
								
								</div>
								<div className="flex w-[60vw]">
									<Form className="flex flex-col gap-2 ">
										<div className="flex flex-col gap-2 whitespace-nowrapp ">
											<Label
												htmlFor="old Password"
												value="Old Password"
												color="text-dark"
												className="text-sm "
											/>
											<Field
												placeholder="OLd Password"
												id="oldPassword"
												type="oldPassword"
												name="oldPassword"
												sizing="sm"
												className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
												color="black"
											/>
										</div>
										<ErrorMessage
											name="oldPassword"
											component="div"
											className="text-red-500 text-xs italic"
										/>

										<div className="flex flex-col gap-2 whitespace-nowrapp ">
											<Label
												htmlFor="New Password"
												value="New Password"
												color="text-dark"
												className="text-sm "
											/>
											<Field
												placeholder="New Password"
												id="newPassword"
												sizing="sm"
												type="newPassword"
												name="newPassword"
												className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
												color="black"
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
											className="w-full rounded-md p-2  mt-5 mb-5 text-green-200 "
											color="green"
										>
											<h6 className="text-black">Change Password</h6>
										</Button>
									</Form>
									<div className="text-red-500">hello</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				<div className="flex  justify-start mt-10 flex-col  ">
					
					<div className="flex gap-20 justify-start m-10  ">
                <form className="flex max-w-md flex-col gap-4 bg white bg-white rounded-xl dark:bg-gray-800 h-100 p-20 shadow-md ">
				<h1 className=" mb-4 font-extrabold text-3xl text-center text-teal-900 dark:text-white">User Info</h1>
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
												{/* <ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-xs italic"
										/> */}
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
												{/* <ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-xs italic"
										/>
		 */}
      </div>
        
      <div className="flex items-center gap-2 rounded-md">
        {/* <Checkbox id="agree" /> */}
        <Label htmlFor="agree" className="flex">
          {/* I agree with the&nbsp; */}
          <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            {/* terms and conditions */}
          </Link>
        </Label>
      </div>
	  <button type="submit"  className="bg-teal-500 text-black  hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-900 hover:border-teal-900 rounded w-80 bg-red-900  dark:text-white ">
Update User
</button>
    </form>


	<form className="flex max-w-md flex-col gap-4 bg white bg-white rounded-xl dark:bg-gray-800 h-100 p-20 shadow-md  ">
   
   <h1 className=" mb-4 font-extrabold text-3xl text-center text-teal-900 dark:text-white">Change password</h1>
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
          <Label htmlFor="repeat-password" value="Repeat password"  />
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
          <Label htmlFor="repeat-password" value="confirm password"  />
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
        {/* <Checkbox id="agree" /> */}
        <Label htmlFor="agree" className="flex">
          {/* I agree with the&nbsp; */}
          <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500 ">
            {/* terms and conditions */}
          </Link>
        </Label>
      </div>
	  <button type="submit"  className="bg-teal-500 text-black  hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-900 hover:border-teal-900 rounded w-80 bg-red-900  dark:text-white ">
Update password
</button>
    </form>
	</div>		
	</div>

			</DashboardLayout>
		</Formik>
	)

	return content
}

export default Settings
