import DashboardLayout from "../components/DashboardLayout"
import avt from "../assets/avatar2.jpeg"
import { Button } from "primereact/button"
import { Form, Formik } from "formik"
import { Label } from "flowbite-react"
import {
	useChangePasswordMutation,
	useDeleteUserMutation,
	useUpdateUserInfoMutation,
} from "../store/features/user/usersApiSlice"
import * as Yup from "yup"
import { InputText } from "primereact/inputtext"
import { useDispatch } from "react-redux"
import { logOut } from "../store/features/auth/authSlice"
import { Navigate } from "react-router-dom"

const Settings2 = () => {
  const dispatch = useDispatch()
	const [changePassword, { isLoading }] = useChangePasswordMutation()
	const [changeUserData] = useUpdateUserInfoMutation()
	const [DeleteUser] = useDeleteUserMutation()
	const user = localStorage.getItem("user")
	const UserObj = JSON.parse(user)
	// console.log(obj._id, '<<<=====USER');

	return (
		<DashboardLayout>
			<div className="flex flex-col gap-4 h-[90vh] w-fit ml-4">
				<div className="flex flex-col mt-4">
					<div className="flex gap-8" id="Personal Info">
						<div className="p-2 w-[25vw]">
							<h1 className="text-2xl text-gray-500">Personal Info</h1>
							<p>Use a permanent address where you can receive mail.</p>
						</div>

						<div id="form" className="flex flex-col gap-4">
							<div className="flex gap-4 items-center">
								<img
									src={avt}
									alt="Avatar"
									width="30%"
									height="40%"
									className="rounded"
								/>
								<div>
									<Button
										label={isLoading ? "Submiting..." : "Save"}
										size="small"
										disabled={isLoading}
										className="w-fit h-[40px] rounded p-2 bg-gray-500 text-white focus:ring-0 hover:bg-green-500"
									/>
									<p className="mt-2">JPG, GIF or PNG. 1MB max.</p>
								</div>
							</div>
							<div>
								<div className="">
									<Formik
										initialValues={{
											firstName: "",
											lastName: "",
											email: "",
										}}
										validationSchema={Yup.object({
											FirstName: Yup.string().required(
												"First Name is required!"
											),
											LastName: Yup.string().required("Last Name is required!"),
											email: Yup.string().email().required("Email Required!"),
										})}
										onSubmit={async (values) => {
											try {
												const data = await changeUserData(values).unwrap()
												console.log(data, "USER PASSWORD++++++")
												return data
											} catch (error) {
												console.log(error)
											}
										}}
									>
										<Form className="flex flex-col gap-2 w-[60vw]">
											<div className="flex flex-col gap-2 whitespace-nowrap w-80">
												<Label
													htmlFor="firstName"
													value="First Name"
													color="text-dark"
													className="text-sm"
												/>
												<InputText
													placeholder={UserObj.firstName}
													type="text"
													id="firstName"
													name="firstName"
													className="bg-white w-[800px]"
												/>
											</div>

											<div className="flex flex-col gap-2 whitespace-nowrap w-80">
												<Label
													htmlFor="lastName"
													value="Last Name"
													color="text-dark"
													className="text-sm"
												/>
												<InputText
													placeholder={UserObj.lastName}
													type="text"
													name="lastName"
													id="lastName"
													className="bg-white w-[800px]"
												/>
											</div>

											<div className="flex flex-col gap-2 w-80">
												<Label
													htmlFor="Email"
													value="Email"
													color="text-dark"
													className="text-sm mr-8"
												/>
												<InputText
													placeholder={UserObj.email}
													type="email"
													name="email"
													id="email"
													className="bg-white w-[800px]"
												/>
											</div>
											<Button
											type="submit"
												className="w-fit h-[40px] rounded p-2 bg-gray-500 mt-2 text-white hover:bg-green-500 focus:ring-0"
												label="Save"
											/>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr className="border-gray-400 border-2xl" />
				<div className="flex flex-col mt-4">
					<div className="flex justify-between" id="Change Password">
						<div className="p-2 w-[25vw]">
							<h1 className="text-2xl text-gray-500">Change Password</h1>
							<p>Update your password associated with your account.</p>
						</div>

						<div id="form" className="flex flex-col gap-4">
							<div>
								<div className="">
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
												.minUppercase(
													1,
													"Must contain atleast 1 uppercase letter"
												)
												.minLowercase(
													1,
													"Must contain atleast 1 lowercase letter"
												)
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
										<Form className="flex flex-col gap-2 w-[60vw]">
											<div className="flex flex-col gap-2 whitespace-nowrap w-80">
												<Label
													htmlFor="Current Password"
													value="First Name"
													color="text-dark"
													className="text-sm"
												/>
												<InputText
													placeholder="Enter Current Password"
													type="password"
													id="oldPassword"
													name="oldPassword"
													// sizing="sm"
													// style={{ backgroundColor: "white" }}
													className="bg-white w-[800px]"
												/>
											</div>

											<div className="flex flex-col gap-2 whitespace-nowrap w-80">
												<Label
													htmlFor="New Password"
													value="New Password"
													color="text-dark"
													className="text-sm"
												/>
												<InputText
													placeholder="New Password"
													type="password"
													id="newPassword"
													name="newPassword"
													// sizing="sm"
													className="bg-white w-[800px]"
												/>
											</div>

											<div className="flex flex-col gap-2 w-80">
												<Label
													htmlFor="confirmPassword"
													value="Confirm Password"
													color="text-dark"
													className="text-sm mr-8"
												/>
												<InputText
													placeholder="Confirm Password"
													type="password"
													name="confirmPassword"
													id="confirmPassword"
													// sizing="sm"
													className="bg-white w-[800px]"
												/>
											</div>
											<Button
												className="w-fit h-[40px] rounded p-2 bg-gray-500 mt-2 text-white hover:bg-green-500 focus:ring-0"
												disabled={isLoading}
												label={isLoading ? "Submiting" : "Save"}
											/>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr className="border-gray-400 border-2xl" />

				<div className="flex gap-8" id="Delete Account">
					<div className="p-2 w-[25vw]">
						<h1 className="text-2xl text-gray-500">Delete Account</h1>
						<p className="text-clip overf">
							No longer want to use our service? You can delete your account
							here. This action is not reversible. All information related to
							this account will be deleted permanently.
						</p>
					</div>

					<div className="">
						<Button
							className="w-[200px] rounded p-2 bg-red-500 mt-2 text-white focus:ring-0"
							label={isLoading ? "Deleting ..." : "Yes, Delete My Account"}
							onClick={() => {
								DeleteUser(UserObj._id)
							dispatch(logOut());
							<Navigate to="/" />
								
								
							}}
							disabled={isLoading}
						/>
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Settings2
