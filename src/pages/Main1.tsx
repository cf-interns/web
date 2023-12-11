// import { Tooltip } from "flowbite-react"
import DashboardLayout from "../components/DashboardLayout"

import NotificationTable from "../components/notifiTable"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import Widgets from "../components/Widgets"
import {
	// useGetAllNotificationsQuery,
	useGetAllNotifsInDbQuery,
} from "../store/features/notifications/notificationsApiSlice"
import { useDispatch } from "react-redux"
import { setUpNotifications } from "../store/features/notifications/notificationsSlice"
import "primereact/resources/primereact.min.css" //core ;
// import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"
import BreadCrumbs from "../components/BreadCrumbs"

const Main1 = () => {
	/* const { data: realData } = useGetAllNotificationsQuery({
		appToken: "2a3ee4bd-ea61-4d0e-9b96-d4a73e1cde22",
	})
	console.log(realData, 'DATA'); */
	
	const { data: realData2 } = useGetAllNotifsInDbQuery()
	console.log(realData2, "DATA 2")


	const dispatch = useDispatch()
	dispatch(setUpNotifications(realData2))

	return (
		<DashboardLayout>
			<div className="flex flex-col gap-4 mb-8">
				<div className="p-2 m-4 flex items-center">
					<BreadCrumbs />
					{/* <h1 className="text-[#5a5c69] text-3xl font-bold p-2 ml-2 font-normal cursor-pointer">
						Dashboard
					</h1> */}
				</div>

				<Widgets />

				<div className="flex lg:flex-col m-4 gap-[30px] mb-4">
				{/* 	<div className="bg-white shadow-md cursor-pointed rounded-[4px] p-4">
						<div>
							<LineChart
								width={600}
								height={450}
								data={realData2}
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
								<Tooltip content={undefined} />
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
					</div> */}
					<div className="mb-5">
						<NotificationTable realData={realData2} />
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Main1
