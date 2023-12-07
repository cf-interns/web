
import DashboardLayout from "../components/DashboardLayout"
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
const Tool = () => {


        const tools3 = [
					{
						name: "Email",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
						link: "/sendemail",
						img: "",
					},
					{
						name: "Sms",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
						link: "/send-sms",
						img: "",
					},
					{
						name: "Push",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
						link: "/send-push",
						img: "",
					},
					{
						name: "Automatic Notifications",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
						link: "/sendemail",
						img: "",
					},
				]

     const header = (
				<img
					alt="Card"
					src="https://primefaces.org/cdn/primereact/images/usercard.png"
				/>
			)
			const footer = (link: string) => (
				<div className="flex items-center justify-evenly">
					<Link to={link} className="bg-gray-800 text-white text-center py-2 px-4 text-xl rounded w-[200px]">
						Send
					</Link>
					
				</div>
			)
    return (
			<DashboardLayout>
				<div className="m-12">
					<div className="m-auto w-[80vw] rounded p-20 shadow-xl">
						<h1 className="text-center  text-4xl font-bold text-gray-800 rounded p-4  w-full">
							Send Notification
						</h1>
						{/* <div className="flex justify-center flex-row gap-8 item-start mt-4">
							<Card className="max-w-sm shadow-xl border-double border-4 border-gray-500 h-[45vh] hover:bg-gray-600 duration-500 ">
								<img
									src={avtg}
									alt="email"
									width="100%"
									height="100%"
									className="rounded"
								/>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Push notification
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Send message using push notification
								</p>
								<Link
									to="/send-push"
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Send push
									<svg
										className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</Link>
							</Card>
							<Card className="max-w-sm shadow-xl border-double border-4 border-gray-500 h-[45vh] hover:bg-gray-600 duration-500 ">
								<img
									src={avtg}
									alt="email"
									width="100%"
									height="100%"
									className="rounded"
								/>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									SMS Notification
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Send message using sms notification
								</p>
								<Link
									to="/send-sms"
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Send SMS
									<svg
										className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</Link>
							</Card>
							<Card className="max-w-sm shadow-xl border-double border-4 border-gray-500 h-[45vh] hover:bg-gray-600 duration-500">
								<img
									src={avtg}
									alt="email"
									width="100%"
									height="100%"
									className="rounded"
								/>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Email Notification
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Send message using email notification
								</p>
								<Link
									to="/sendemail"
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Send Email
									<svg
										className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</Link>
							</Card>
							<Card className="max-w-sm shadow-xl border-double border-4 border-gray-500 h-[45vh] hover:bg-gray-600 duration-500">
								<img
									src={avtg}
									alt="email"
									width="100%"
									height="100%"
									className="rounded"
								/>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Automatic email
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Send message using Automatic email notification
								</p>
								<Link
									to="/auto-emails"
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Send Email
									<svg
										className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</Link>
							</Card>
						</div> */}
						<div className="card flex justify-content-center">
							{
                                tools3.map((i, key) => {
                                    return (
																			<Card
																				title={i.name}
																				footer={footer(i.link)}
																				header={header}
																				key={key}
																				className="md:w-[18vw] m-4"
																			>
																				<p className="m-0">{i.text}</p>
																			</Card>
																		)
                                })
                            }
						</div>
					</div>
				</div>
			</DashboardLayout>
		)
}

export default Tool