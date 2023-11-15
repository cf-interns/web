import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend /* ResponsiveContainer */,
} from "recharts"
import DashboardLayout from "../components/DashboardLayout"
import sent from "../assets/compose-mail-14297.png"
import sms from "../assets/sms-8687.svg"
import notif from "../assets/notification-bell-5743.svg"
import email from "../assets/email-8704.png"
import NotificationTable from "./notifiTable"

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
]

const Main1 = () => {
	return (
		<DashboardLayout>
			<div className="flex flex-col gap-4 mb-8">
				<h1 className="text-[#5a5c69] text-3xl font-bold p-2 ml-2 font-normal cursor-pointer">
					Dashboard
				</h1>
				<div
					className=" bg-gray-100 flex items-center justify-center bg-gray-100 m-4 rounded"
					id="Widgets"
				>
					<div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
						<div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
							<div className="w-full lg:w-1/5">
								<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
									<div className="flex items-center">
										<div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
											<img src={email} />
										</div>
										<div className="flex flex-col justify-center">
											<div className="text-md">3456</div>
											<div className="text-lg font-bold text-gray-800">
												Emails
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="w-full lg:w-1/5">
								<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
									<div className="flex items-center">
										<div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
											<img src={sms} />
										</div>
										<div className="flex flex-col justify-center">
											<div className="text-md">3456</div>
											<div className="text-lg font-bold text-gray-800">SMS</div>
										</div>
									</div>
								</div>
							</div>

							<div className="w-full lg:w-1/5">
								<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
									<div className="flex items-center">
										<div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
											<img src={notif} />
										</div>
										<div className="flex flex-col justify-center">
											<div className="text-md">3456</div>
											<div className="text-lg font-bold text-gray-800">
												Notifications
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="w-full lg:w-1/5">
								<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
									<div className="flex items-center">
										<div className="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
											<img src={sent} />
										</div>
										<div className="flex flex-col justify-center">
											<div className="text-md">3456</div>
											<div className="text-lg font-bold text-gray-800">
												Total
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <div className="w-full lg:w-1/5">
									<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
										<div className="flex items-center">
											<div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
												<svg
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</div>
											<div className="flex flex-col justify-center">
												<div className="text-lg">$948'560</div>
												<div className="text-sm text-gray-400">Revenue</div>
											</div>
										</div>
									</div>
								</div> */}
						</div>
					</div>
				</div>

				<div className="flex lg:flex-col m-4 gap-[30px] mb-4">
					<div className="bg-white shadow-md cursor-pointed rounded-[4px] p-4">
						<div>
							<LineChart
								width={600}
								height={450}
								data={data}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line
									type="monotone"
									dataKey="pv"
									stroke="#8884d8"
									activeDot={{ r: 8 }}
								/>
								<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
							</LineChart>
						</div>
					</div>
					<div className="mb-5 ">
						<NotificationTable />
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Main1
