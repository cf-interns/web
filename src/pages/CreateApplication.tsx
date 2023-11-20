import { useCreateAppMutation } from "../store/features/application/appApiSlice"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"
import "../createapp.css"
import { Label } from "flowbite-react"
import { Link } from "react-router-dom"
import DashboardLayout from "../components/DashboardLayout"

const CreateApplication = () => {
	const [createApp, { isLoading }] = useCreateAppMutation()

	const content = isLoading ? (
		<h1>Submitting ...</h1>
	) : (
		<Formik
			initialValues={{
				appName: "",

				description: "",
			}}
			validationSchema={Yup.object({
				appName: Yup.string()
					.min(10, "Name must be a minimum of 10 characters or more")
					.required("Application Name is required"),

				description: Yup.string().required("A description is required!"),
			})}
			onSubmit={async (values) => {
				try {
					const data = await createApp(values).unwrap()
					return data

					//Navigate Somewhre
				} catch (error) {
					return error
				}
			}}
		>
			<DashboardLayout>
				<div className="container ">
					<div className=" wrapper">
						<img
							className="w-8 h-8 mr-2"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							alt="logo"
						/>
						GNS
						<h1 className="text-a">
							{" "}
							<span className="oranged">Create Your </span>{" "}
							<span>Application </span>{" "}
						</h1>
						<Form className="form">
							<div className="">
								<div className="">
									<Label
										className="label"
										color="text-dark"
										htmlFor="appName"
										value="Application Name"
									/>
								</div>
								<Field
									className="field-form"
									id="appName"
									type="text"
									placeholder="A GNS application"
									name="appName"
								/>
							</div>
							<ErrorMessage
								name="appName"
								component="div"
								className="text-red-500 text-xs italic"
							/>

							<div className="">
								<div>
									<Label
										className="label"
										color="text-dark"
										htmlFor="appdescription"
										value="Application Desc"
									/>
								</div>
								<Field
									className="field-form"
									as="textarea"
									id="description"
									placeholder="App Description"
									name="description"
								/>
							</div>
							<ErrorMessage
								name="description"
								component="div"
								className="text-red-500 text-xs italic"
							/>

							<Link to="//allApplication">
							<button type="submit"  className="bg-teal-500 text-black  hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-900 hover:border-teal-900 rounded w-full bg-red-900  dark:text-white ">
Update password
</button>

							</Link>
						</Form>
					</div>
				</div>
			</DashboardLayout>
		</Formik>
	)

	return content
}

export default CreateApplication
