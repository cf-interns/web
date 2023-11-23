import { Notification } from "../interfaces/notifications.interface"

const NotificationData = (props: { prop: Notification }) => {
	const { prop } = props 
	
	return (
		<div id="app" className="bg-gray-100 m-auto w-fit h-fit">
			<div className="w-fit mx-auto  px-8 py-8 h-fit">
				<h2 className="uppercase font-bold text-gray-600 text-3xl text-center pb-8">
					{`${prop.notification_type} Notification`}
				</h2>

				<div className="shadow-lg flex h-fit gap-4 justify-between p-2 m-2">
					<div id="NotifInfo">
						<h1 className="text-2xl mb-3">Notification Data</h1>
						<div className="flex flex-col p-2">
							<label className="text-lg "># ID</label>
							<p className="font-bold text-xl text-black ">
								{prop?._id || 'N/A'}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg "> Title</label>
							<p className="font-bold text-xl text-black">
								{prop?.title ? prop.title : "N/A"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Body</label>
							<p className="font-bold text-xl text-black">
								{prop?.body || "Lorem Ipseum kvikjavsasjkas"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Recipient</label>
							<p className="font-bold text-xl text-black">
								{prop?.recipient || "N/A"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Sent at:</label>
							<p className="font-bold text-xl text-black">
								{prop?.created_at ? prop.created_at.toLocaleString() : "N/A"}
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg  ">Subject</label>
							<p className="font-bold text-xl text-black">
								{prop?.subject || "N/A"}
							</p>
						</div>
					</div>

					<div id="NotifDetail">
						<div className="flex flex-col p-2">
							<h1 className="text-2xl mb-3">Notification Status</h1>

							<label className="text-lg">Status</label>
							<p className="font-bold text-xl text-green-400">ACTIVE</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-lg">Token</label>
							<p className="font-bold text-xl text-black">
								{prop?.author?.token}
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
					</div>
					<div id="NotifAppDetail">
						<div className="flex flex-col p-2">
							<h1 className="text-2xl mb-3">Application Data</h1>

							<label className="text-lg">App Name</label>
							<p className="font-bold text-xl ">{prop?.author?.appName}</p>
						</div>
	
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotificationData