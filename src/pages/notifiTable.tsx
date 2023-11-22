// import { Checkbox, Table } from "flowbite-react"

import {
	DataTable /* DataTableFilterMeta */,
	DataTableFilterMeta,
} from "primereact/datatable"
import {
	Column /* ColumnFilterElementTemplateOptions */,
	ColumnFilterElementTemplateOptions,
} from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css" //core css;
import "primeicons/primeicons.css"

import { FilterMatchMode, FilterOperator } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Tag } from "primereact/tag"
import { NotificationApiResponse } from "../store/features/notifications/notificationsApiSlice"
import { useState } from "react"
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown"
import { Dialog } from "primereact/dialog"
import { Notification } from "../interfaces/notifications.interface"
// import { useDispatch } from "react-redux"
import NotificationData from "../components/NotificationData"

function NotificationTable({
	realData,
}: {
	realData: NotificationApiResponse | undefined
}) {
	// console.log(updateStoreNotifications, "Store2")

	// console.log("test", realData)'
	const [visible, setVisible] = useState(false)
	const [selectedNotif, setSelectedNotif] = useState<Notification>()
	const [globalFilterValue, setGlobalFilterValue] = useState<string>("")

	// const data = [
	// 	{
	// 		_id: 1,
	// 		title: "Title 1",
	// 		body: "Lorem Ipseum",
	// 		status: "PENDING",
	// 		type: "SMS",
	// 	},
	// 	{
	// 		_id: 2,
	// 		title: "Title 2",
	// 		body: "Lorem Ipseum",
	// 		status: "SUCCESS",
	// 		type: "EMAIL",
	// 	},
	// 	{
	// 		_id: 3,
	// 		title: "Title 3",
	// 		body: "Lorem Ipseum 3",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 4,
	// 		title: "Title 4",
	// 		body: "Lorem Ipseum 4",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 5,
	// 		title: "Title 5",
	// 		body: "Lorem Ipseum 5",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 6,
	// 		title: "Title 6",
	// 		body: "Lorem Ipseum 6",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 7,
	// 		title: "Title 7",
	// 		body: "Lorem Ipseum 7",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 8,
	// 		title: "Title 8",
	// 		body: "Lorem Ipseum 8",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 9,
	// 		title: "Title 9",
	// 		body: "Lorem Ipseum 9",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// 	{
	// 		_id: 10,
	// 		title: "Title 10",
	// 		body: "Lorem Ipseum 10",
	// 		status: "FAILED",
	// 		type: "PUSH",
	// 	},
	// ]

	const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
	const paginatorRight = <Button type="button" icon="pi pi-download" text />
	const [filters, setFilters] = useState<DataTableFilterMeta>({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		body: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
		status: { value: null, matchMode: FilterMatchMode.EQUALS },
	})
	// const [statuses] = useState<string[]>(["PENDING", "SUCCESS", "FAILED"])

	const getSeverity = (status: string) => {
		switch (status) {
			case "FAILED":
				return "danger"

			case "success": //Adjust Api to return SUCCESS in caps
				return "success"

			case "PENDING":
				return "info"
		}
	}
	const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const _filters = { ...filters }

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		_filters["global"].value = value

		setFilters(_filters)
		setGlobalFilterValue(value)
	}

	const initFilters = () => {
		setFilters({
			global: { value: null, matchMode: FilterMatchMode.CONTAINS },
			body: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
			},
			status: {
				operator: FilterOperator.OR,
				constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
			},
		})
		setGlobalFilterValue("")
	}

	const clearFilter = () => {
		initFilters()
	}

	const renderHeader = () => {
		return (
			<div className="flex justify-between p-2 items-center">
				<div className="">
					<div className="flex items-center gap-2">
						{/* <Button
							type="button"
							label="Serach By Type"
							icon="pi pi-filter mr-2"
							outlined
							onClick={clearFilter}
							className="font-bold text-lg bg-gray-300 rounded-2xl p-3 hover:text-black hover:bg-gray-200"
						/> */}
						<Button
							type="button"
							icon="pi pi-filter-slash mr-2"
							label="Clear"
							outlined
							onClick={clearFilter}
							className="font-bold text-lg bg-gray-200 rounded-2xl p-3 hover:text-black hover:bg-gray-200"
						/>
					</div>
				</div>

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
			</div>
		)
	}

	interface Stat {
		status: string
	}

	const statusBodyTemplate = (rowData: Stat) => {
		return (
			<Tag
				value={rowData.status}
				className="w-fit p-2 rounded-md mb-2"
				severity={getSeverity(rowData.status)}
			/>
		)
	}
	const statusItemTemplate = (option: string) => {
		return <Tag value={option} severity={getSeverity(option)} />
	}

	const statusRowFilterTemplate = (
		options: ColumnFilterElementTemplateOptions
	) => {
		return (
			<Dropdown
				value={options.value}
				options={["PENDING", "FAILED", "SUCCESS"]}
				onChange={(e: DropdownChangeEvent) => {
					options.filterApplyCallback(e.value)
					return
				}}
				itemTemplate={statusItemTemplate}
				placeholder="Select One"
				className="p-column-filter"
				showClear
				style={{
					width: "13rem",
					padding: 2,
					borderRadius: "13px",
					marginBottom: "2px",
				}}
			/>
		)
	}
	const header2 = renderHeader()
	return (
		<div
			className="mb-2 rounded-md mb-[1rem] p-4"
			style={{ backgroundColor: "whitesmoke" }}
		>
			<DataTable
				// header={header}
				value={realData?.notifications}
				// value={data}
				sortMode="multiple"
				// tableStyle={{ minWidth: "50rem", padding: "10rem" }}
				showGridlines
				stripedRows
				paginator
				rows={5}
				rowsPerPageOptions={[2, 4, 5, 8, 10]}
				paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
				currentPageReportTemplate="{first} to {last} of {totalRecords}"
				paginatorLeft={paginatorLeft}
				paginatorRight={paginatorRight}
				removableSort
				dataKey="id"
				filters={filters}
				filterDisplay="menu"
				// loading={}
				globalFilterFields={["body", "status"]}
				header={header2}
				emptyMessage="No Notifications found."
				// tableClassName="p-2 divide-y"
				tableStyle={{ minWidth: "50rem" }}
				size="large"
				sortOrder={-1}
			>
				<Column
					field="_id"
					header="ID"
					sortable
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="title"
					header="Title"
					filterPlaceholder="Search"
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
						marginRight: 3,
						marginBottom: "2",
					}}
					body={(row) => row?.title || "N/A"}
					// className="mb-8"
				/>

				<Column
					field="body"
					header="Body"
					filter
					sortable
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="status"
					header="Status"
					showFilterMenu={true}
					// filterMenuStyle={{ width: "14px" }}
					// style={{ minWidth: "12rem" }}
					body={statusBodyTemplate}
					filter
					filterElement={statusRowFilterTemplate}
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="notification_type"
					header="Type"
					sortable
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="sent_by"
					header="By"
					sortable
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="created_at"
					header="Date"
					sortable
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="provider"
					header="Provider"
					sortable
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
				/>
				<Column
					field="Info"
					header="Details"
					style={{
						minWidth: "12rem",
						padding: 10,
						border: "1px solid lightgray",
					}}
					body={(row) => (
						<Button
							label="Show"
							icon="pi pi-external-link mr-2"
							onClick={() => {
								setVisible(true)
								setSelectedNotif(row)
								console.log(selectedNotif, "TYPE")
							}}
							severity="info"
							className="hover:bg-gray-200 w-fit p-2"
						/>
					)}
				/>
			</DataTable>

			<Dialog
				// header="Info"
				visible={visible}
				style={{ width: "70vw" }}
				onHide={() => setVisible(false)}
				className="bg-gray-300"
			>
				{selectedNotif && <NotificationData prop={selectedNotif} />}
			</Dialog>
		</div>
	)
}
export default NotificationTable
