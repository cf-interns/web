import DashboardLayout from "../components/DashboardLayout"
import { Button } from "primereact/button"
import { useFormik } from "formik"
import { Label } from "flowbite-react"
import {
	useChangePasswordMutation,
	useGetAuthUserQuery,
	// useDeleteUserMutation,
	// useGetSpecificUserQuery,
	useUpdateUserInfoMutation,
} from "../store/features/user/usersApiSlice"
import * as Yup from "yup"
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import BreadCrumbs from "../components/BreadCrumbs"

const Settings2 = () => {
	const [changeUserData] = useUpdateUserInfoMutation()
	const [changePassword, { isLoading }] = useChangePasswordMutation();
	const {data:authUser} = useGetAuthUserQuery();
	// console.log(authUser, 'Auht User');
	
	
	// const loggedUser = useGetSpecificUserQuery(authUser?._id)
	const notifySucess = () => toast.success("User Info Updated")
	const notifySucessPassword = () => toast.success("User Password Changed!")

	const notifyError = () => toast.error("User Info Not Updated")
	const notifyErrorCurrentPassword = () =>
		toast.error("Current Password Incorrect!")

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
				notifySucess()
				return data
			} catch (error) {
				notifyError()
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
				// .password()
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
				.oneOf([Yup.ref("newPassword"), ''], "Passwords don't match.")
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
				notifySucessPassword()
				formik2.resetForm()
				return data
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				if (
					error?.data.message ===
					"Incorrect Password. Please enter the current password"
				) {
					formik2.resetForm()
					return notifyErrorCurrentPassword()
				}
				formik2.resetForm()
				notifyError()
				console.log(error)
			}
		},
	})
	useEffect(() => {
		// const { data } = authUser
		formik.setFieldValue("firstName", authUser?.firstName)
		formik.setFieldValue("lastName", authUser?.lastName)
		formik.setFieldValue("email", authUser?.email)
	}, [authUser])

	return (
		<DashboardLayout>
			<div className="flex flex-col items-center justify-center m-auto h-[90vh] w-fit">
				<div className="flex flex-col h-fit mb-8">
					<div>
						<div className="my-5">
							<BreadCrumbs />
						</div>
						<div className="mt-5" id="Personal Info">
							<div className="p-2 w-[25vw]">
								<h1 className="text-2xl text-gray-500">General Information</h1>
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
												placeholder={authUser?.firstName}
												type="text"
												id="firstName"
												name="firstName"
												value={formik.values.firstName}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik.errors.firstName && formik.touched.firstName && (
												<div className="text-red-700 italic">
													{formik.errors.firstName}
												</div>
											)}
										</div>

										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label
												htmlFor="lastName"
												value="Last Name"
												color="text-dark"
												className="text-sm"
											/>
											<input
												placeholder={authUser?.lastName}
												type="text"
												name="lastName"
												id="lastName"
												value={formik.values.lastName}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className="bg-white w-[60vw] rounded-lg shadow-md"
											/>
											{formik.errors.lastName && formik.touched.lastName && (
												<div className="text-red-700 italic">
													{formik.errors.lastName}
												</div>
											)}
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

				<hr className="border-gray-400 border-4xl " />
				<div className=" mt-8">
					<div className="flex justify-between" id="Change Password">
						<div id="form" className="flex flex-col gap-4">
							<div className="p-2 w-[25vw]">
								<h1 className="text-2xl text-gray-500">Change password</h1>
							</div>
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
											{formik2.errors.oldPassword &&
												formik2.touched.oldPassword && (
													<div className="text-red-700 italic">
														{formik2.errors.oldPassword}
													</div>
												)}
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
											{formik2.errors.newPassword &&
												formik2.touched.newPassword && (
													<div className="text-red-700 italic">
														{formik2.errors.newPassword}
													</div>
												)}
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
											{formik2.errors.confirmPassword &&
												formik2.touched.confirmPassword && (
													<div className="text-red-700 italic">
														{formik2.errors.confirmPassword}
													</div>
												)}
										</div>
										<Button
											className="w-full h-[40px] rounded-lg p-2 bg-gray-500 mt-2 text-white hover:bg-green-500 focus:ring-0"
											disabled={isLoading}
											label={isLoading ? "Submiting" : "Save"}
											type="submit"
										/>
									</form>
									<ToastContainer />
									{/* onClick={() => console.log("YO! 2")} */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Settings2
