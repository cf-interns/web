import "../App.css"
import Trail from "../pages/auth/trail"
import CreateApplication from "../pages/CreateApplication"
import AllApplication from "../pages/allApplication"
import Email from "../pages/email"
import SendSMS from "../pages/sendSMS"
import SendPush from "../pages/SendPush"
import ViewDetails from "../pages/ViewDetails"
import Sms from "../pages/sms"
import AppDetails from "../pages/AppDetails"
import SendPushNotification from "../pages/SendPushnotif"
import SmsNotification from "../pages/Smsnotification"
import SendEmail from "../pages/SendEmail"
import Settings from "../pages/settings"
import Main1 from "../pages/Main1"

const protectedRoutes = [
	{
		path: "/dashboard",
		element: <Main1 />,
	},
	{
		path: "/CreateApplication",
		element: <CreateApplication />,
	},
	{
		path: "/settings",
		element: <Settings />,
	},
	{
		path: "/allApplication",
		element: <AllApplication />,
	},
	{
		path: "/send-email",
		element: <Email />,
	},
	{
		path: "/send-sms",
		element: <SendSMS />,
	},
	{
		path: "/send-push",
		element: <SendPush />,
	},
	{
		path: "/VIewDetails/:id",
		element: <ViewDetails />,
	},
	{
		path: "/sms",
		element: <Sms />,
	},
	{
		path: "/appDetails",
		element: <AppDetails />,
	},
	{
		path: "/sendpushnotification",
		element: <SendPushNotification />,
	},
	{
		path: "/sendemail",
		element: <SendEmail />,
	},
	{
		path: "/smsnotification",
		element: <SmsNotification />,
	},
	{
		path: "/trail",
		element: <Trail />,
	},
]

export { protectedRoutes }
