import DashboardLayout from "../components/DashboardLayout"
import { Card, Dropdown } from "flowbite-react"

const AppDetails = () => {
	// const [changePassword, { isLoading }] = useChangePasswordMutation();

	// const content = isLoading ? <h1>Submitting ...</h1> :

	return (
		<DashboardLayout>
			<div className="flex flex-col w-[80vw] m-auto p-2 rounded">
				<h1 className="header">App Details</h1>
				<Card className="max-w-2xl">
					<div className="flex justify-end px-4 pt-">
						<Dropdown inline label="">
							<Dropdown.Item>
								<a
									href="#"
									className="block px-4 py-2 bg-teal-600 text-sm text-white dark:text-gray-200 "
								>
									Edit app
								</a>
							</Dropdown.Item>
							<Dropdown.Item>
								<a
									href="#"
									className="block px-4 py-2 text-sm bg-gray-text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Export Data
								</a>
							</Dropdown.Item>
							<Dropdown.Item>
								<a
									href="#"
									className="block px-4 bg-red-600 py-2 text-sm text-white dark:text-white-600 "
								>
									Delete app
								</a>
							</Dropdown.Item>
						</Dropdown>
					</div>
					<div className="flex flex-col items-center pb-10 m-4">
						<h5 className="text-xl text-right font-meduim mb-8 ">
							Application Details
						</h5>
						<div className="grid grid-flow-row-dense grid-cols-3 gap-4 grid-rows-3 m-4...">
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">Application name</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">Application type</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">ID</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">Application status</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">Created date</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">Last update</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0">
								<h1 className="text-zinc-600">Description</h1>
								<h2>........</h2>
							</div>
							<div className="m-4 p-0 col-span-3 p-2 m-2">
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Token
									</label>
									<div className="flex">
										<input
											type="text"
											name="token"
											id="confirm-password"
											placeholder="URERHKJQWEGASGSG1234324534324AD"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										></input>
										<button type="submit" className="btn-btn">
											Regenerate
										</button>
									</div>
								</div>
							</div>
						</div>
						<div></div>
					</div>
				</Card>
			</div>
		</DashboardLayout>
	)

	// return content;
}

export default AppDetails
