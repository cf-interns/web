import DashboardLayout from "../components/DashboardLayout"
import { Link } from "react-router-dom"
import { Card } from "primereact/card"
const Tool = () => {
	const tools3 = [
		{
			name: "Email",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
			link: "/sendemail",
			img: "",
		},
		{
			name: "Sms",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
			link: "/send-sms",
			img: "",
		},
		{
			name: "Push",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
			link: "/send-push",
			img: "",
		},
	]

	const header = (
		<img
			alt="Card"
			src="https://primefaces.org/cdn/primereact/images/usercard.png"
		/>
	)
	const footer = (link: string) => (
		<div className="flex items-center justify-evenly">
			<Link
				to={link}
				className="bg-gray-800 text-white text-center py-2 px-4 text-xl rounded w-[200px]"
			>
				Send
			</Link>
		</div>
	)
	return (
		<DashboardLayout>
			<div className="m-12">
				<div className="m-auto w-[80vw] rounded p-20 shadow-xl">
					<h1 className="text-center  text-4xl font-bold text-gray-800 rounded p-4  w-full">
						Send Notification
					</h1>
					<div className="card flex justify-center">
						{tools3.map((i, key) => {
							return (
								<Card
									title={i.name}
									footer={footer(i.link)}
									header={header}
									key={key}
									className=" m-4"
								>
									<p className="m-0">{i.text}</p>
								</Card>
							)
						})}
					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default Tool
