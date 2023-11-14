import React, { Fragment, ReactNode } from "react"
import SidebarV2 from "./SidebarV2"
import { NavbarDash } from "./Dashboard"
interface props{
    children: ReactNode
}

export default function DashboardLayout(props: props) {
    const { children } = props
	return (
		<Fragment>
			<div className="flex h-full overflow-y">
				<div className="basis-[14%] h-[100vh] ">
					<SidebarV2 />
				</div>
				<div className="border w-full">
					<NavbarDash />
					<div className="overflow-y-auto mb-5 pb-5 h-fit max-h-[100vh] w-full">
						{children}
					</div>
				</div>
			</div>
		</Fragment>
	)
}
