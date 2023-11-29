import sent from "../assets/compose-mail-14297.png"
import sms from "../assets/sms-8687.svg"
import notif from "../assets/notification-bell-5743.svg"
import email from "../assets/email-8704.png"
import { useSelector } from "react-redux";
import { selectCurrentNotification } from "../store/features/notifications/notificationsSlice"

const Widgets = () => {
	// const notifs = store.getState().notification;
	// console.log(notifs);

	const data = useSelector(selectCurrentNotification) || [];
	console.log('Notifications ===>',data);
	const SMS = data.filter((sms) => sms.notification_type === 'SMS');
	const EMAILS = data.filter((email) => email.notification_type === 'EMAIL');
	const PUSH = data.filter((push) => push.notification_type === 'PUSH')

   
	return (
		<div
			className="  flex items-center justify-center bg-gray-100 m-4 rounded"
			id="Widgets"
		>
			<div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
					<div className="w-full lg:w-1/5">
						<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-900" style={{
							borderColor: '--tw-bg-'
						}}>
							<div className="flex items-center">
								<div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
									<img src={email} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{EMAILS ? EMAILS.length : '4444' }</div>
									<div className="text-lg font-bold text-gray-800">Emails</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/5">
						<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
							<div className="flex items-center">
								<div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
									<img src={sms} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{SMS ? SMS.length : '4444'}</div>
									<div className="text-lg font-bold text-gray-800">SMS</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/5">
						<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
							<div className="flex items-center">
								<div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
									<img src={notif} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{PUSH ? PUSH.length : '4444'}</div>
									<div className="text-lg font-bold text-gray-800">Push</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/5">
						<div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
							<div className="flex items-center">
								<div className="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
									<img src={sent} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{ data ? data.length : '4444'}</div>
									<div className="text-lg font-bold text-gray-800">Total</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Widgets
