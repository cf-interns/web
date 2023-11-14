import { Checkbox, Table } from "flowbite-react"

function NotificationTable() {
	return (
		<Table hoverable>
			<Table.Head>
				<Table.HeadCell className="p-4">
					<Checkbox />
				</Table.HeadCell>
				<Table.HeadCell>Product name</Table.HeadCell>
				<Table.HeadCell>Color</Table.HeadCell>
				<Table.HeadCell>Category</Table.HeadCell>
				<Table.HeadCell>Price</Table.HeadCell>
				<Table.HeadCell>
					<span className="sr-only">Edit</span>
				</Table.HeadCell>
				<Table.HeadCell>
					<span className="sr-only">Delete</span>
				</Table.HeadCell>
			</Table.Head>
			<Table.Body className="divide-y">
				<Table.Row className="bg-white">
					<Table.Cell className="p-4">
						<Checkbox />
					</Table.Cell>
					<Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
						{'Apple MacBook Pro 17"'}
					</Table.Cell>
					<Table.Cell>Sliver</Table.Cell>
					<Table.Cell>Laptop</Table.Cell>
					<Table.Cell>$2999</Table.Cell>
					<Table.Cell>
						<a href="#" className="font-medium text-cyan-600 hover:underline ">
							Edit
						</a>
					</Table.Cell>
					<Table.Cell>
						<a href="#" className="font-medium text-cyan-600 hover:underline ">
							Delete
						</a>
					</Table.Cell>
				</Table.Row>
				<Table.Row className="bg-white">
					<Table.Cell className="p-4">
						<Checkbox />
					</Table.Cell>
					<Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
						Microsoft Surface Pro
					</Table.Cell>
					<Table.Cell>White</Table.Cell>
					<Table.Cell>Laptop PC</Table.Cell>
					<Table.Cell>$1999</Table.Cell>
					<Table.Cell>
						<a href="#" className="font-medium text-cyan-600 hover:underline ">
							Edit
						</a>
					</Table.Cell>
					<Table.Cell>
						<a href="#" className="font-medium text-cyan-600 hover:underline ">
							Delete
						</a>
					</Table.Cell>
				</Table.Row>
				<Table.Row className="bg-white">
					<Table.Cell className="p-4">
						<Checkbox />
					</Table.Cell>
					<Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
						Magic Mouse 2
					</Table.Cell>
					<Table.Cell>Black</Table.Cell>
					<Table.Cell>Accessories</Table.Cell>
					<Table.Cell>$99</Table.Cell>
					<Table.Cell>
						<a href="#" className="font-medium text-cyan-600 hover:underline ">
							Edit
						</a>
					</Table.Cell>
					<Table.Cell>
						<a href="#" className="font-medium text-cyan-600 hover:underline ">
							Delete
						</a>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	)
}
export default NotificationTable