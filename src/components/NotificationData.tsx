import { Notification } from "../interfaces/notifications.interface";
import {format} from 'date-fns'

const NotificationData = (props: { prop: Notification }) => {
	const { prop } = props 
	
	return (
		<div id="app" className="bg-gray-100 m-auto">
			<div className="mx-auto">
				<h2 className="uppercase font-bold text-gray-600 text-3xl text-center pb-8">
					{`${prop.notification_type} Notification`}
				</h2>
				<div className="mt-4">
					<h1 className="text-xl mb-3">#ID - {prop?._id || "N/A"}</h1>
					<hr className="my-1" />
					<div className="grid grid-cols-3">
						<div className="flex flex-col p-2">
							<label className="text-lg "> Title</label>
							<p className="font-bold text-xl text-black">
								{prop?.title ? prop.title : "N/A"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg">Application Name</label>
							<p className="font-bold text-xl text-black">{prop?.author?.appName || 'N/A'}</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Sent at:</label>
							<p className="font-bold text-xl text-black">
								{prop?.created_at ? format(new Date(prop.created_at), 'MMMM do yyyy, h:mm:ss a') : "N/A"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Subject</label>
							<p className="font-bold text-xl text-black">
								{prop?.subject || "N/A"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg">Token</label>
							<p className="font-bold text-xl text-black">
								{prop?.author?.token || 'N/A'}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg">Provider</label>
							<p className="font-bold text-xl text-black">{prop?.provider}</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg">Type</label>
							<p className="font-bold text-xl text-black">
								{prop?.notification_type}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Recipient</label>
							<p className="font-bold text-xl text-black">
								{prop?.recipient || "N/A"}
							</p>
						</div>
					</div>
					<div className="w-full mt-5">
						<label className="text-lg  ">Content</label>
						<p className="text-xl text-gray-700">
							{prop?.body || ""}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotificationData