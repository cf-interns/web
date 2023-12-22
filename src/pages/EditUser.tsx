import { Label } from "flowbite-react"
import { useFormik } from "formik"
import { useUpdateUserInfoMutation } from "../store/features/user/usersApiSlice"
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditUser = (props: { prop: any }) => {
	const { prop } = props
	const [changeUserData] = useUpdateUserInfoMutation()
	const notifySucccess = () => toast.success("User Data Updated!")
	const notifyError = () => toast.error("User Not Data Updated!")

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required("First Name is required!")
				.matches(
					/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
					"Name can only contain letters."
				),
			lastName: Yup.string()
				.required("Last Name is required!")
				.matches(
					/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
					"Name can only contain letters."
				),
			email: Yup.string().email().required("Email Required!"),
		}),
		onSubmit: async (values) => {
			try {
				const data = await changeUserData(values).unwrap()
				notifySucccess()
				formik.resetForm()
				return data
			} catch (error) {
				notifyError()
				// console.log(error)
			}
		},
	})

	useEffect(() => {
		// const { data } = authUser
		formik.setFieldValue("firstName", prop?.firstName)
		formik.setFieldValue("lastName", prop?.lastName)
		formik.setFieldValue("email", prop?.email)
	}, [prop])
	return (
		<>
			<form
				className="px-5 py-2 flex flex-col gap-2"
				onSubmit={formik.handleSubmit}
			>
				<div className="flex flex-col gap-2 whitespace-nowrap py-3">
					<Label
						htmlFor="firstName"
						value="First Name"
						color="text-dark"
						className="text-lg"
					/>
					<input
						placeholder={prop.firstName}
						type="text"
						id="firstName"
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-auto rounded-lg shadow-lg"
					/>
					{formik.errors.firstName && formik.touched.firstName && (
						<div className="text-red-700 italic">{formik.errors.firstName}</div>
					)}
				</div>

				<div className="flex flex-col gap-2 whitespace-nowrap py-3">
					<Label
						htmlFor="lastName"
						value="Last Name"
						color="text-dark"
						className="text-lg"
					/>
					<input
						placeholder={prop.lastName}
						type="text"
						name="lastName"
						id="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-full rounded-lg shadow-lg"
					/>
					{formik.errors.lastName && formik.touched.lastName && (
						<div className="text-red-700 italic">{formik.errors.lastName}</div>
					)}
				</div>

				<div className="flex flex-col gap-2 whitespace-nowrap py-3">
					<Label
						htmlFor="Email"
						value="Email"
						color="text-dark"
						className="text-lg mr-8"
					/>
					<input
						placeholder={prop.email}
						type="email"
						name="email"
						id="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-full rounded-lg shadow-lg"
					/>
					{formik.errors.email && formik.touched.email && (
						<div className="text-red-700 italic">{formik.errors.email}</div>
					)}
				</div>

				<button
					type="submit"
					className="w-full h-[40px] rounded-lg shadow-lg bg-gray-500 mt-4 text-white text-lg font-bold hover:bg-green-500 focus:ring-0"
				>
					Save
				</button>
			</form>
			<ToastContainer />
		</>
	)
}

export default EditUser
