
import { useSelector } from "react-redux";
import { selectCurrentNotification } from "../store/features/notifications/notificationsSlice"
import { HiOutlineMail} from "react-icons/hi"
import {HiOutlineBellAlert} from 'react-icons/hi2'
import { FaCommentSms } from "react-icons/fa6";
import { MdOutlineNotificationAdd } from "react-icons/md"

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
			className="bg-gray-100 m-4 rounded-lg"
			id="Widgets"
		>
			<div className="mx-auto w-3/4">
				<div className="flex justify-between py-5 w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
					<div className="w-full lg:w-1/5">
						<div className=" w-full border-gray-400 shadow-lg p-4 rounded-lg bg-white border-l-4">
							<div className="flex items-center">
								<div className="icon w-fit p-3.5 bg-gray-700 text-white rounded-full mr-3">
									<HiOutlineMail size={40} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">
										{EMAILS ? EMAILS.length : "4444"}
									</div>
									<div className="text-lg font-bold text-gray-800">Emails</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/5">
						<div className=" w-full p-4 rounded-lg shadow-lg bg-white border-l-4 border-gray-400">
							<div className="flex items-center">
								<div className="icon w-fit p-3.5 bg-gray-700 text-white rounded-full mr-3">
									<FaCommentSms size={40} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{SMS ? SMS.length : "4444"}</div>
									<div className="text-lg font-bold text-gray-800">SMS</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/5">
						<div className=" w-full p-4 rounded-lg shadow-lg bg-white border-l-4 border-gray-400">
							<div className="flex items-center">
								<div className="icon w-fit p-3.5 bg-gray-700 text-white rounded-full mr-3">
									<HiOutlineBellAlert size={40} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{PUSH ? PUSH.length : "4444"}</div>
									<div className="text-lg font-bold text-gray-800">Push</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/5">
						<div className=" w-full p-4 rounded-lg bg-white shadow-lg border-l-4 border-gray-400">
							<div className="flex items-center">
								<div className="icon w-fit p-3.5 bg-gray-700 text-white rounded-full mr-3">
									<MdOutlineNotificationAdd size={40} />
								</div>
								<div className="flex flex-col justify-center">
									<div className="text-md">{data ? data.length : "4444"}</div>
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
