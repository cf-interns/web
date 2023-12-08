import  { Fragment, ReactNode } from "react"
import SidebarV2 from "./SidebarV2"
import { NavbarDash } from "./Dashboard"
import PushNotifications from "./PushNotifications"
interface props{
    children: ReactNode
}

export default function DashboardLayout(props: props) {
    const { children } = props
	return (
		<Fragment>
			<div className="flex h-full overflow-y">
				<div className="w-fit h-[100vh] ">
					<SidebarV2 />
				</div>
				<div className=" w-full bg-gray-200">
					<NavbarDash />
					<div className="overflow-y-auto mb-5 pb-5 h-fit max-h-[100vh] w-full">
						<PushNotifications />
						{children}
					</div>
				</div>
			</div>
		</Fragment>
	)
}
