import avtg from "../assets/news.webp"
import { Card } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"
import { Link } from "react-router-dom"
const Tool = () => {
	return (
		<DashboardLayout>
			<Link to="/allApplication">
				<svg
					className="w-10 ml-20 mt-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
			</Link>

			<div className="m-12">
				<div className="md:container md:mx-auto bg-white rounded p-20 shadow-xl">
					<h1 className="flex justify-center text-4xl font-bold text-white dark:text-white bg-gray-800 rounded p-4 m-8">
						Send Notification
					</h1>
					<div className="flex justify-center flex-row gap-8 item-start ">
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
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Tool
