import { useCreateAppMutation } from "../store/features/application/appApiSlice"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"
import "../createapp.css"
import { Label } from "flowbite-react"

import DashboardLayout from "../components/DashboardLayout"
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const CreateApplication = () => {
	const [createApp, { isLoading, }] = useCreateAppMutation()
	const notifySucess = () => toast("App Created Successfully");

	return (
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
					notifySucess()

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

							<button className="btn" type="submit">
								{isLoading ? "Submitting ..." : "Submit"}
							</button>
						</Form>
						<ToastContainer />
					</div>
				</div>
			</DashboardLayout>
		</Formik>
	)

}

export default CreateApplication
