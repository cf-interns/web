import { Label } from "flowbite-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useSignUpMutation } from "../store/features/auth/authApiSlice"
import { ToastContainer, toast } from "react-toastify"

 const PopupInfo = ({setCreateUser}: {setCreateUser: any}) => {
	const [createUser] = useSignUpMutation()
	// const notifyPassorfail = () =>
	// 	formik ?  toast.passed("passed") || formik : toast.failed("Failed")
 

	const notifySuccess = () => toast.success('User Added!');
	const notifyError = () => toast.error("User Not Added!")

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("First Name is required!"),
			lastName: Yup.string().required("Last Name is required!"),
			email: Yup.string().email().required("Email Required!"),
			password: Yup.string().required("Password Required!"),
		}),
		onSubmit: async (values) => {
			try {
				const data = await createUser(values).unwrap()
				notifySuccess();
				setCreateUser(false);
				
				return data
			} catch (error) {
				console.log(error);
				notifyError();
				setCreateUser(false)

			}
		}
	})
	return (
		<div>
			<form
				className="p-8 flex flex-col gap-2 border-radius text-lg"
				onSubmit={formik.handleSubmit}
			>
				<div className="flex flex-col gap-2 whitespace-nowrap p-4 ">
					<Label
						htmlFor="firstName"
						value="First Name"
						color="text-dark"
						className="text-lg"
					/>
					<input
						placeholder="Enter FirstName"
						type="text"
						id="firstName"
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-auto rounded-lg shadow-lg"
					/>
				</div>
				{formik?.errors?.firstName && (
					<div className="text-red-500 text-xs italic">
						{formik?.errors?.firstName}
					</div>
				)}

				<div className="flex flex-col gap-2 whitespace-nowrap p-4">
					<Label
						htmlFor="lastName"
						value="Last Name"
						color="text-dark"
						className="text-lg"
					/>
					<input
						placeholder="Enter LastName"
						type="text"
						name="lastName"
						id="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-full rounded-lg shadow-lg"
					/>
				</div>
				{formik?.errors?.lastName && (
					<div className="text-red-500 text-xs italic">
						{formik?.errors?.lastName}
					</div>
				)}

				<div className="flex flex-col gap-2 whitespace-nowrap p-4 ">
					<Label
						htmlFor="Email"
						value="Email"
						color="text-dark"
						className="text-lg mr-8"
					/>
					<input
						placeholder="Enter Email"
						type="email"
						name="email"
						id="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-full rounded-lg shadow-lg"
					/>
				</div>
				{formik?.errors?.email && (
					<div className="text-red-500 text-xs italic">
						{formik?.errors?.email}
					</div>
				)}

				<div className="flex flex-col gap-2 whitespace-nowrap p-4 ">
					<Label
						htmlFor="Password"
						value="Password"
						color="text-dark"
						className="text-lg mr-8"
					/>
					<input
						placeholder="Password"
						type="password"
						name="password"
						id="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-white w-full rounded-lg shadow-lg"
					/>
				</div>
				{formik?.errors?.password && (
					<div className="text-red-500 text-xs italic">
						{formik?.errors?.password}
					</div>
				)}

				<button
					type="submit"
					className="w-auto h-[40px] rounded-lg shadow-lg bg-gray-500 mt-4 text-white text-lg font-bold hover:bg-green-500 focus:ring-0"
				>
					Add
				</button>
			</form>
			<ToastContainer />
		</div>
	)
}

export default PopupInfo
