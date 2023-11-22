import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import DashboardLayout from "../components/DashboardLayout"
import { Tag } from "primereact/tag"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import { FilterMatchMode } from "primereact/api"
import { Dialog } from "primereact/dialog"

const UsersTable = () => {
  const [visible, setVisible] = useState(false)
	// const [selectedNotif, setSelectedNotif] = useState(null)
  interface Stat {
		actions: ['EDIT', 'DELETE']
	}
	const user = [
		{
			fname: "John",
			lname: "Doe",
			Age: 2,
			email: "johndoe@mail.com",
			status: "ACTIVE",
			actions: ["DELETE", "EDIT", ],
		},
		{
			fname: "Jane",
			lname: "Doe",
			Age: 1,
			email: "janeDoe@mail.com",
			status: "INACTIVE",
			actions: ["DELETE", "EDIT"],
		},
		{
			fname: "Jane",
			lname: "Doe",
			Age: 1,
			email: "janeDoe@mail.com",
			status: "INACTIVE",
			actions: ["DELETE", "EDIT"],
		},
		{
			fname: "Jane",
			lname: "Doe",
			Age: 1,
			email: "janeDoe@mail.com",
			status: "ACTIVE",
			actions: ["DELETE", "EDIT"],
		},
		{
			fname: "Jane",
			lname: "Doe",
			Age: 1,
			email: "janeDoe@mail.com",
			status: "INACTIVE",
			actions: ["DELETE", "EDIT"],
		},
		{
			fname: "Jane",
			lname: "Doe",
			Age: 1,
			email: "janeDoe@mail.com",
			status: "ACTIVE",
			actions: ["DELETE", "EDIT"],
		},
	]
  const getSeverity = (actions: string) => {
		switch (actions) {
			case "DELETE":
				return "danger"

			case "EDIT": //Adjust Api to return SUCCESS in caps
				return "success"
		}
	};
  const statusBodyTemplate = (rowData: Stat) => {
		return (
			<div className="flex gap-4">
				<Tag
					value={rowData.actions[0]}
					className="w-[60px] p-2 rounded-md mb-2 cursor-pointer"
					severity={getSeverity(rowData.actions[0])}
					onClick={() => {
						setVisible(true)
					}}
				/>
				<Tag
					value={rowData.actions[1]}
					className="w-[60px] p-2 rounded-md mb-2"
					severity={getSeverity(rowData.actions[1])}
				/>
			</div>
		)
	};
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
      matchMode: FilterMatchMode.CONTAINS
    },

		status: { value: null, matchMode: FilterMatchMode.EQUALS },
	});
    const [globalFilterValue, setGlobalFilterValue] = useState("");
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
						// severity="info"
					/>
				</div>
			)
		}

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
	const paginatorRight = <Button type="button" icon="pi pi-download" text />
	return (
		<DashboardLayout>
			<div className="flex flex-col items-center justify-items-center justify-center gap-4">
				<h1 className="text-2xl text-gray-600 ">Users</h1>
				<DataTable
					value={user}
					tableStyle={{ minWidth: "50rem", border: "1px solid lightgray" }}
					className="w-[fit]"
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
					globalFilterFields={["fname", "lname", "email", "status"]}
					header={renderHeader()}
					emptyMessage="No customers found."
				>
					<Column
						header="First Name"
						field="fname"
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
						sortable
						rowReorderIcon
						filter
						filterPlaceholder="Search by firts Name"
					/>
					<Column
						header="Last Name"
						field="lname"
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
						header="Age"
						field="Age"
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
						sortable
						// filter
						// filterPlaceholder="Search by Age"
					/>
					<Column
						header="Status"
						field="status"
						body={(row) => {
							if (row.status === "ACTIVE") {
								return (
									<Tag
										value={row.status}
										className="w-[80px]"
										severity="success"
									/>
								)
							} else
								return (
									<Tag
										value={row.status}
										className="w-[80px]"
										severity="info"
									/>
								)
						}}
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
						sortable
						filter
						filterPlaceholder="Search by Status"
					/>
					<Column
						header="Actions"
						field="actions"
						body={statusBodyTemplate}
						style={{
							minWidth: "12rem",
							padding: 10,
							border: "1px solid lightgray",
						}}
					/>
				</DataTable>
				<Dialog
					visible={visible}
					style={{ width: "70vw" }}
					onHide={() => setVisible(false)}
					className="bg-gray-300"
				>
          <div>
            <h1>Are You Sure???</h1>
          </div>
        </Dialog>
			</div>
		</DashboardLayout>
	)
}

export default UsersTable
