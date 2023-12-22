import DashboardLayout from "../components/DashboardLayout"
import { Link } from "react-router-dom"
import { Card } from "primereact/card";
import Email from '../assets/emailPic.png';
import SMS from '../assets/SMS-2.png';
import Push from '../assets/Push2.png';

const Tool = () => {
	const tools3 = [
		{
			name: "Email",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
			link: "/sendemail",
			img: <img alt="Card" src={Email} className="w-[15vw]" />,
		},
		{
			name: "Sms",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
			link: "/send-sms",
			img: <img alt="Card" src={SMS} className="w-[15vw]" />,
		},
		{
			name: "Push",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet cumqu",
			link: "/send-push",
			img: <img alt="Card" src={Push} className="w-[15vw] self-center" />,
		},
	]


	const footer = (link: string) => (
		<div className="">
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
				<div className="m-auto w-[80vw] rounded p-20 ">
					<h1 className="text-center  text-4xl font-bold text-gray-800 rounded p-4  w-full">
						Send Notification
					</h1>
					<div className="card flex justify-evenly">
						{tools3.map((i, key) => {
							return (
								<Card
									title={i.name}
									footer={footer(i.link)}
									header={i.img}
									key={key}
									className="m-4"
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
