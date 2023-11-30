import React from "react"

import SidebarV2 from "./SidebarV2"
import { NavbarDash } from "./Dashboard"
import { Link } from "react-router-dom"
import DashboardLayout from "./DashboardLayout"

const Email = () => {
	return (
		<DashboardLayout >
					<div className="flex px-2 divide-x-2 mt-8">
						<h1 className="text-[#5a5c69] text-[28px] leading-[34px] px-4 font-normal cursor-pointer ml-6">
							Send Email
						</h1>

						<nav className="flex px-4" aria-label="Breadcrumb">
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
											components
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
											All Application
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>

					<div className="bg-[white] flex flex-col w-3/6 h-96 mt-32 ml-96 shadow-2xl rounded-lg">
						<div className="p-4">
							<label
								htmlFor="default-input"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
							>
								To
							</label>
							<input
								type="text"
								id="default-input"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<div className="p-4">
							<label
								htmlFor="default-input"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
							>
								Subject
							</label>
							<input
								type="text"
								id="default-input"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-white-800">
							<label htmlFor="comment" className="sr-only">
								Your comment
							</label>
							<textarea
								id="comment"
								rows={4}
								className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-white-800 focus:ring-0 dark:text-black dark:placeholder-gray-400"
								placeholder="Write a comment..."
								required
							></textarea>
						</div>
						<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
							<button
								type="submit"
								className="inline-flex items-center py-2.5 px-4 text-xl font-medium text-center text-black bg-[red] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
							>
								Send Email
							</button>
							<div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
								<div className="flex items-center space-x-1 sm:pr-4">
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 12 20"
										>
											<path
												stroke="currentColor"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
											/>
										</svg>
										<span className="sr-only">Attach file</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 16 20"
										>
											<path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
										</svg>
										<span className="sr-only">Embed map</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 16 20"
										>
											<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
											<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
										</svg>
										<span className="sr-only">Upload image</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 16 20"
										>
											<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
											<path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
										</svg>
										<span className="sr-only">Format code</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
										</svg>
										<span className="sr-only">Add emoji</span>
									</button>
								</div>
								<div className="flex flex-wrap items-center space-x-1 sm:pl-4">
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 21 18"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
											/>
										</svg>
										<span className="sr-only">Add list</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
										</svg>
										<span className="sr-only">Settings</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
											<path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
										</svg>
										<span className="sr-only">Timeline</span>
									</button>
									<button
										type="button"
										className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
									>
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
											<path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
										</svg>
										<span className="sr-only">Download</span>
									</button>
								</div>
							</div>
						</div>
					</div>
			</DashboardLayout>
	)
}

export default Email
