import DashboardLayout from "../components/DashboardLayout"
import avt from "../assets/avatar2.jpeg"
import { Button } from "primereact/button"
import { useFormik } from "formik"
import { Label } from "flowbite-react"
import {
	useChangePasswordMutation,
	useGetSpecificUserQuery,
	useUpdateUserInfoMutation,
} from "../store/features/user/usersApiSlice"
import * as Yup from "yup"
// import { useEffect} from "react"
import { ToastContainer, toast } from "react-toastify"
// import { useDispatch } from "react-redux"
// import { logOut } from "../store/features/auth/authSlice"
// import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
// import { ToastContainer, toast } from "react-toastify"
import BreadCrumbs from "../components/BreadCrumbs"

// import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"

const Settings2 = () => {
	const [changeUserData] = useUpdateUserInfoMutation()
	const [changePassword, { isLoading }] = useChangePasswordMutation()
	const notifySucess = () => toast.success("Password Updated Successfully")
	const notifySucessinfo = () => toast.success("Info Updated Successfully")
	const notifyError = () => toast.error("Password Update Notsuccessful")
	const notifyErrorinfo = () => toast.error("PInfo Update Notsuccessful")
	const user = localStorage.getItem("user")
	const UserObj = JSON.parse(user ? user : "")
	const loggedUser = useGetSpecificUserQuery(UserObj?._id)

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("First Name is required!"),
			lastName: Yup.string().required("Last Name is required!").strict(true),
			email: Yup.string().email().required("Email Required!"),
		}),
		onSubmit: async (values) => {
			try {
				const data = await changeUserData(values).unwrap()
				notifySucessinfo()
				console.log(data, "USER PASSWORD++++++")
				return data
			} catch (error) {
				notifyErrorinfo()
				console.log(error)
			}
		},
	})

	const formik2 = useFormik({
		initialValues: {
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
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
				confirmPassword: Yup.string()
				.password()
				.required("Please enter the new password")
				.max(25)
				.min(9)
				.minUppercase(1, "Must contain atleast 1 uppercase letter")
				.minLowercase(1, "Must contain atleast 1 lowercase letter")
				.minNumbers(1, "Must cantain atleast 1 number")
				.minSymbols(1, "Must contain atleast 1 symbol"),
		}),
		onSubmit: async (values) => {
			try {
				const data = await changePassword(values).unwrap()
				notifySucess()
				console.log(data, "USER PASSWORD++++++")
				return data
			} catch (error) {
				notifyError()
				console.log(error)
			}
		},
	})

	useEffect(() => {
		const { data } = loggedUser
		formik.setFieldValue("firstName", data?.firstName)
		formik.setFieldValue("lastName", data?.lastName)
		formik.setFieldValue("email", data?.email)
	}, [loggedUser])

	return (
		<DashboardLayout>
			<div className="flex flex-col gap-8 h-[90vh] w-fit ml-4 p-4">
				<div className="flex items-center p-2">
					<BreadCrumbs />
					<h1 className="text-2xl ">Settings</h1>
				</div>
				<div className="flex gap-8 mt-4 h-[40vh] mb-8">
					<div className="flex flex-col gap-10">
						<div>
							<img src={avt} alt="Avatar" className="rounded-full w-60 h-60" />
							<Button
								label="Upload"
								className="bg-gray-300 h-fit w-fit p-2 ml-36 rounded-lg"
							/>
						</div>

						<div className="" id="Personal Info">
							<div className="p-2 w-[25vw]">
								<h1 className="text-2xl text-gray-500">Personal Info</h1>
								<p>Use a permanent address where you can receive mail.</p>
							</div>
						</div>
					</div>

					<div className="p-2">
						<div id="form" className="flex flex-col gap-4">
							<div className="flex gap-4 items-center"></div>
							<div>
								<div className="">
									<form
										className="flex flex-col gap-2 w-[60vw]"
										onSubmit={formik.handleSubmit}
									>
										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="firstName"
												value="First Name"
												color="text-dark"
												className="text-sm"
											/>
											<input
												placeholder={UserObj.firstName}
												type="text"
												id="firstName"
												name="firstName"
												value={formik.values.firstName}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik.errors.firstName &&  <div className="text-red-700 italic">{ formik.errors.firstName }</div>}
										</div>

										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="lastName"
												value="Last Name"
												color="text-dark"
												className="text-sm"
											/>
											<input
												placeholder={UserObj.lastName}
												type="text"
												name="lastName"
												id="lastName"
												value={formik.values.lastName}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik.errors.lastName &&  <div className="text-red-700 italic">{ formik.errors.lastName }</div>}
										</div>

										<div className="flex flex-col gap-2 w-80">
											<Label
												htmlFor="Email"
												value="Email"
												color="text-dark"
												className="text-sm mr-8"
											/>
											<input
												placeholder={UserObj.email}
												type="email"
												name="email"
												id="email"
												value={formik.values.email}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik.errors.email &&  <div className="text-red-700 italic">{ formik.errors.email }</div>}
										</div>
										<Button
											type="submit"
											className="w-full h-[40px] rounded-lg p-2 bg-gray-500 mt-2 text-white hover:bg-green-500 focus:ring-0"
											label="Save"
										/>
									</form>
									<ToastContainer />
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr className="border-gray-400 border-2xl " />
				<div className="flex flex-col mt-4">
					<div className="flex justify-between" id="Change Password">
						<div className="p-2 w-[25vw]">
							<h1 className="text-2xl text-gray-500">Change Password</h1>
							<p>Update your password associated with your account.</p>
						</div>

						<div id="form" className="flex flex-col gap-4">
							<div>
								<div className="">
									<form
										className="flex flex-col gap-2 w-[60vw]"
										onSubmit={formik2.handleSubmit}
									>
										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="Current Password"
												value="Current Password"
												color="text-dark"
												className="text-sm"
											/>
											<input
												placeholder="Enter Current Password"
												type="password"
												id="oldPassword"
												name="oldPassword"
												value={formik2.values.oldPassword}
												onChange={formik2.handleChange}
												onBlur={formik2.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik2.errors.oldPassword &&  <div className="text-red-700 italic">{ formik2.errors.oldPassword }</div>}
									
										</div>

										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="New Password"
												value="New Password"
												color="text-dark"
												className="text-sm"
											/>
											<input
												placeholder="New Password"
												type="password"
												id="newPassword"
												name="newPassword"
												value={formik2.values.newPassword}
												onChange={formik2.handleChange}
												onBlur={formik2.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik2.errors.newPassword &&  <div className="text-red-700 italic">{ formik2.errors.newPassword }</div>}
										</div>

										<div className="flex flex-col gap-2 w-80">
											<Label
												htmlFor="confirmPassword"
												value="Confirm Password"
												color="text-dark"
												className="text-sm mr-8"
											/>
											<input
												placeholder="Confirm Password"
												type="password"
												name="confirmPassword"
												id="confirmPassword"
												value={formik2.values.confirmPassword}
												onChange={formik2.handleChange}
												onBlur={formik2.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik2.errors.confirmPassword &&  <div className="text-red-700 italic">{ formik2.errors.confirmPassword }</div>}
										</div>
										<Button
											className="w-full h-[40px] rounded-lg p-2 bg-gray-500 mt-2 text-white hover:bg-green-500 focus:ring-0"
											disabled={isLoading}
											label={isLoading ? "Submiting" : "Save"}
											type="submit"
										/>
									</form>
									<ToastContainer/>
											{/* onClick={() => console.log("YO! 2")} */}
										
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* 	<hr className="border-gray-400 border-2xl" />

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
							className="w-[74%] rounded-lg p-2 bg-red-500 mt-2 text-white focus:ring-0"
							label={isLoading ? "Deleting ..." : "Yes, Delete My Account"}
							onClick={() => {
								confirm2()
							
							}}
							disabled={isLoading}
						/>
					</div>
					<ConfirmDialog />
				</div> */}
			</div>
		</DashboardLayout>
	)
}

export default Settings2
