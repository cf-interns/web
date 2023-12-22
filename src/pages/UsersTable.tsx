import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import DashboardLayout from "../components/DashboardLayout"
import { Tag } from "primereact/tag"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import { FilterMatchMode } from "primereact/api"
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"
import {
	useDeleteUserMutation,
	useGetUsersQuery,
} from "../store/features/user/usersApiSlice"
import { Dialog } from "primereact/dialog"
import EditUser from "./EditUser"
import { User } from "../store/features/api/apiSlice"
import PopupInfo from "../components/PopupInfo"
import BreadCrumbs from "../components/BreadCrumbs";
import { ToastContainer, toast } from "react-toastify"

const UsersTable = () => {
	// const [selectedNotif, setSelectedNotif] = useState(null);
	const [createUser, setCreateUser] = useState(false)
	// const [noPassed, setuserPassed]
	const actions = ["DELETE", "EDIT"];
	const notifyDeletion = (user: string) => toast.success(`User ${user} Account Deleted!`)

	const { data: realUsers } = useGetUsersQuery()
	const [deleteUser] = useDeleteUserMutation()
	const getSeverity = (actions: string) => {
		switch (actions) {
			case "DELETE":
				return "danger"

			case "EDIT": //Adjust Api to return SUCCESS in caps
				return "success"
		}
	}

	const user = localStorage.getItem("user")
	const userMain = JSON.parse(user as string)
	// console.log('Current User', userMain._id);

	const realUser2 = realUsers?.filter((user: User) => user._id !== userMain._id)

	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		fname: {
			value: null,
			matchMode: FilterMatchMode.STARTS_WITH || FilterMatchMode.CONTAINS,
		},
		lname: {
			value: null,
			matchMode: FilterMatchMode.STARTS_WITH || FilterMatchMode.CONTAINS,
		},
		email: {
			value: null,
			matchMode: FilterMatchMode.CONTAINS,
		},
	})
	const [globalFilterValue, setGlobalFilterValue] = useState("")
	const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const _filters = { ...filters }

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		_filters["global"].value = value

		setFilters(_filters)
		setGlobalFilterValue(value)
	}

	const renderHeader = () => {
		return (
			<div className="flex justify-between">
				<div className="flex items-center bg-gray-300 gap-1 p-1 w-fit rounded-2xl">
					<div className="w-fit ml-2">
						<label htmlFor="searchRow">
							<i className="pi pi-search" />
						</label>
					</div>
					<InputText
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						placeholder="Keyword Search"
						id="searchRow"
						className="border-none bg-transparent focus:ring-transparent"
					/>
				</div>

				<Button
					icon="pi pi-plus"
					className="font-bold text-lg bg-gray-200 rounded-xl p-2
					  hover:text-white hover:bg-xendriixx focus:ring-0"
					label=" USER"
					onClick={() => {
						// navigate("/sign-up")
						setCreateUser(true)
					}}
				/>
				<Dialog
					visible={createUser}
					style={{ width: "30vw" }}
					onHide={() => setCreateUser(false)}
					header="Create user"
					headerClassName="text-center text-2xl font-bold"
				>
					<PopupInfo setCreateUser={setCreateUser} />
				</Dialog>
			</div>
		)
	}
	const confirm2 = (row_id: string, firstName: string) => {
		return confirmDialog({
			message: "Do you want to delete this User?",
			header: "Delete Confirmation",
			icon: "pi pi-info-circle mr-2",
			acceptLabel: "Confirm",
			rejectLabel: "Cancel",
			acceptClassName:
				"mr-2 bg-green-500 text-white py-2 px-4 border border-white",
			rejectClassName: "mr-[10px] py-2 px-4 border border-blue-200",
			className: "w-[30vw]",

			accept: () => {
				deleteUser(row_id);
				notifyDeletion(firstName)
			},
			reject: () => {},
		})
	}
	// const userMain = useSelector((store: Store))
	const [visible, setVisible] = useState(false)
	const [seletedUser, setSeletedUser] = useState<User>()

	const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
	const paginatorRight = <Button type="button" icon="pi pi-download" text />
	return (
		<DashboardLayout>
			<div className="flex flex-col justify-items-center justify-center gap-4">
				<div className="flex items-center p-2">
					<BreadCrumbs />
				</div>
				<DataTable
					value={realUser2 || undefined}
					tableStyle={{ minWidth: "50rem", border: "1px solid lightgray" }}
					className="w-[fit] p-2"
					showGridlines
					rows={5}
					paginator
					rowsPerPageOptions={[2, 4, 5, 10, 15, 20]}
					paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
					currentPageReportTemplate="{first} to {last} of {totalRecords}"
					paginatorLeft={paginatorLeft}
					paginatorRight={paginatorRight}
					filters={filters}
					filterDisplay="menu" //===>>
					globalFilterFields={["firstName", "lastName", "email"]}
					header={renderHeader()}
					emptyMessage="No Users found."
				>
					<Column
						header="First Name"
						field="firstName"
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
						sortable
						rowReorderIcon
						filter
						filterPlaceholder="Search by first Name"
					/>
					<Column
						header="Last Name"
						field="lastName"
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
						sortable
						filter
						filterPlaceholder="Search by Last Name"
					/>
					<Column
						header="Email"
						field="email"
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
						sortable
						filter
						filterPlaceholder="Search by Email"
					/>
					<Column
						header="ID"
						field="_id"
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
					/>

					<Column
						header="Actions"
						field="actions"
						body={(row) => {
							console.log("Row", row._id)
							return (
								<div className="flex gap-4">
									<Tag
										value={actions[0]}
										className="w-[60px] p-3 rounded-md mb-2 cursor-pointer"
										severity={getSeverity(actions[0])}
										onClick={() => {
											confirm2(row._id, row.firstName)
											// setVisible(true)
										}}
										// icon="pi pi-times"
									/>
									{/* <Button onClick={confirm2} label="Delete"></Button> */}

									<Tag
										value={actions[1]}
										className="w-[60px] p-3 rounded-md mb-2 cursor-pointer"
										severity={getSeverity(actions[1])}
										onClick={() => {
											setVisible(true)
											setSeletedUser(row)
										}}
									/>
								</div>
							)
						}}
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
					/>
				</DataTable>
				<ConfirmDialog />
				<Dialog
					visible={visible}
					style={{ width: "40vw" }}
					onHide={() => setVisible(false)}
					header="Edit User Information"
					headerClassName="text-center text-2xl font-bold"
				>
					<EditUser prop={seletedUser} />
				</Dialog>
				<ToastContainer />
			</div>
		</DashboardLayout>
	)
}

export default UsersTable
