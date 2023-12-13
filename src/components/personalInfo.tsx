import { Button } from "primereact/button"
import { useFormik } from "formik"
import { Label } from "flowbite-react"
import * as Yup from "yup"
// import { useEffect} from "react"
import { ToastContainer, toast } from "react-toastify"
import { useGetSpecificUserQuery, useUpdateUserInfoMutation } from '../store/features/user/usersApiSlice'
import { useEffect } from "react"
import BreadCrumbs from './BreadCrumbs'


function PersonalInfo() {
    const [changeUserData] = useUpdateUserInfoMutation()
	const notifySucessinfo = () => toast.success("Info Updated Successfully")
	const notifyErrorinfo = () => toast.error("Info Update Notsuccessful")
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


	useEffect(() => {
		const { data } = loggedUser
		formik.setFieldValue("firstName", data?.firstName)
		formik.setFieldValue("lastName", data?.lastName)
		formik.setFieldValue("email", data?.email)
	}, [loggedUser])


  return (
    <div className="flex flex-col h-fit mb-4">
					<div>
                    <div className="my-5">
							<BreadCrumbs />
						</div>
						<div className="mt-5" id="Personal Info">
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
										<div className="flex flex-col gap-2 whitespace-nowrap w-80 py-2">
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
											{formik.errors.firstName && formik.touched.firstName &&   <div className="text-red-700 italic">{ formik.errors.firstName }</div>}
										</div>

										<div className="flex flex-col gap-2 whitespace-nowrap w-80 py-2">
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
											{formik.errors.lastName && formik.touched.lastName && <div className="text-red-700 italic">{ formik.errors.lastName }</div>}
										</div>

										<div className="flex flex-col gap-2 w-80 py-2">
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
											{formik.errors.email && formik.touched.email &&  <div className="text-red-700 italic">{ formik.errors.email }</div>}
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
  )
}

export default PersonalInfo