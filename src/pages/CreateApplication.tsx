import { useCreateAppMutation } from "../store/features/application/appApiSlice"
import { useFormik } from "formik"
import * as Yup from "yup"
import "../createapp.css"
import { Label } from "flowbite-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CustomLoader from "../components/CustomLoader"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateApplication = ({ setVisible }: any) => {
	const [createApp, { isLoading }] = useCreateAppMutation()
	const notifySucess = () => toast.success("Application Created Successfully")
	const notifyError = () => toast.error("Application Not Created")
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			appName: "",

			description: "",
		},
		validationSchema: Yup.object({
			appName: Yup.string().required("Application Name is required"),

			description: Yup.string()
				.min(10, "Name must be a minimum of 10 characters or more")
				.required("A description is required!"),
		}),
		onSubmit: async (values) => {
			try {
				const data = await createApp(values).unwrap()
				notifySucess()
				setVisible(false)
				navigate("/allApplication")

				return data
			} catch (error) {
				notifyError()
				return error
			}
		},
	})

	return (
		<>
			<form
				className="w-[fit] m-auto bg-gray-100 sahdow-lg h-[fit] "
				onSubmit={formik.handleSubmit}
			>
				<Label
					className="text-2xl mb-2"
					color="text-dark"
					htmlFor="appName"
					value="Application Name"
				/>

				<input
					className="shadow-lg mb-4 mt-2 appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					id="appName"
					type="text"
					placeholder="A GNS application"
					name="appName"
					value={formik.values.appName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik?.errors?.appName && formik.touched.appName && (
					<div className="text-red-500 text-lg mb-2 italic">
						{formik?.errors?.appName}
					</div>
				)}

				<div>
					<Label
						className="text-2xl mb-2"
						color="text-dark"
						htmlFor="appdescription"
						value="Application Desc"
					/>
				</div>
				<input
					className="shadow-lg mb-4 mt-2 appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					// as="textarea"
					id="description"
					placeholder="App Description"
					name="description"
					value={formik.values.description}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>

				{formik?.errors?.description && formik.touched.description && (
					<div className="text-red-500 text-lg mb-2 italic">
						{formik?.errors?.description}
					</div>
				)}

				<button className="btn" type="submit">
					{/* {isLoading ? "Submitting ..." : "Submit"} */}

					{isLoading ? (
						<>
							<CustomLoader />
							Activating...
						</>
					) : (
						"submit"
					)}
				</button>
			</form>
			<ToastContainer />
		</>
	)
}

export default CreateApplication
