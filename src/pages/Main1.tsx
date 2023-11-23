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

import NotificationTable from "./notifiTable"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import Widgets from "../components/Widgets"
import { useGetAllNotificationsQuery } from "../store/features/notifications/notificationsApiSlice"
import { useDispatch } from "react-redux"
import { setUpNotifications } from "../store/features/notifications/notificationsSlice"
import 'primereact/resources/primereact.min.css'; //core css

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
	const { data: realData } = useGetAllNotificationsQuery({
		appToken: "7f776c23-f318-4f55-a080-8c8cbedeab1b",
	})
	console.log('real', realData);
	
	const dispatch = useDispatch()
	dispatch(setUpNotifications(realData?.notifications));

	return (
		<DashboardLayout>
			<div className="flex flex-col gap-4 mb-8">
				<h1 className="text-[#5a5c69] text-3xl font-bold p-2 ml-2 font-normal cursor-pointer">
					Dashboard
				</h1>

				<Widgets  />

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
					<div className="mb-5">
						<NotificationTable realData={realData} />
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Main1
