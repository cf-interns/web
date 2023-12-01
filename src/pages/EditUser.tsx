import { Label, } from "flowbite-react"
import { useFormik } from "formik"
import { useUpdateUserInfoMutation } from "../store/features/user/usersApiSlice"
import * as Yup from 'yup'



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditUser = (props: {prop: any} ) => {
    const {prop} = props;
    const [changeUserData] = useUpdateUserInfoMutation();
	console.log(prop, 'PROP');
	

		const formik = useFormik({
			initialValues: {
				firstName: "",
				lastName: "",
				email: "",
			},
			validationSchema: Yup.object({
				firstName: Yup.string().required("First Name is required!"),
				lastName: Yup.string().required("Last Name is required!"),
				email: Yup.string().email().required("Email Required!"),
			}),
			onSubmit: async (values) => {
				try {
					const data = await changeUserData(values).unwrap()
					console.log(data, "USER PASSWORD++++++")
					return data
				} catch (error) {
					console.log(error)
				}
			},
		})
  return (
		<form className="p-8 flex flex-col gap-2" onSubmit={formik.handleSubmit}>
			<div className="flex flex-col gap-2 whitespace-nowrap p-4 ">
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
			</div>

			<div className="flex flex-col gap-2 whitespace-nowrap p-4">
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
			</div>

			<div className="flex flex-col gap-2 whitespace-nowrap p-4 ">
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
			</div>
			
			<button
				type="submit"
					className="w-auto h-[40px] rounded-lg shadow-lg bg-gray-500 mt-4 text-white text-lg font-bold hover:bg-green-500 focus:ring-0"
				
			>Save</button>
		</form>
	)
}

export default EditUser