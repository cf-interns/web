import { useCreateAppMutation } from "../store/features/application/appApiSlice"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"
import "../createapp.css"
import { Label } from "flowbite-react"

import DashboardLayout from "../components/DashboardLayout"
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import CustomLoader from "../components/CustomLoader"
import { Link, useNavigate } from "react-router-dom"

const CreateApplication = () => {
	const [createApp, { isLoading, }] = useCreateAppMutation()
	const notifySucess = () => toast.success("App Created Successfully");
	const navigate = useNavigate()
	

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
					navigate("/allApplication")

					return data
					//Navigate Somewhre
				} catch (error) {
					return error
				}
			}}
		>
			<DashboardLayout>
			<div className="flex px-2 divide-x-2 mt-8  w-full gap-2">
						<h1 className="text-[#5a5c69] text-[28px] leading-[34px] px-4 font-normal cursor-pointer ml-6">
							Create Application
						</h1>

						<nav className="flex px-4 w-full" aria-label="Breadcrumb">
							<ol className="inline-flex items-center space-x-1 md:space-x-3">
								<li className="inline-flex items-center">
									<Link
										to="/dashboard"
										className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 dark:text-gray-400"
									>
										<svg
											className="w-3 h-3 mr-2.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
										</svg>
										Home
									</Link>
								</li>
								<li>
									<div className="flex items-center">
										<svg
											className="w-3 h-3 text-gray-400 mx-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">
											pages
										</span>
									</div>
								</li>
								<li aria-current="page">
									<div className="flex items-center">
										<svg
											className="w-3 h-3 text-gray-400 mx-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
											Create Application
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

				<div className="container mt-28 ml-24">
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
								{/* {isLoading ? "Submitting ..." : "Submit"} */}

								{isLoading ? (
											<>
												<CustomLoader />
												Activating...
											</>
										) : "submit"
										}
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
