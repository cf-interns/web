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
			onSubmit={async (values)  => {
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

							<Link to="/allApplication">
								{/* <button type="submit" className="btn">
									{isLoading ? " submitting ..." : "submit" }
									
								</button> */}

								<button
									type="button"
									onClick={onSubmit} disabled={disabled}
									className="py-2 px-4 flex justify-center items-center  bg-teal-600 hover:bg-teal-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md"
								>
									<svg
										width="20"
										height="20"
										fill="currentColor"
										className="mr-2 animate-spin"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
									</svg>
									{isLoading ? text : 'loading...'}
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
