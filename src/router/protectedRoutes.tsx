import "../App.css"
import Trail from "../pages/auth/trail"
import CreateApplication from "../pages/CreateApplication"
import AllApplication from "../pages/allApplication"
import SendSMS from "../pages/sendSMS"
import SendPush from "../pages/SendPush"
import ViewDetails from "../pages/ViewDetails"
import Sms from "../pages/sms"
import AppDetails from "../pages/AppDetails"
import AppDetail from "../components/AppEmail"
import Tool from "../pages/Tools"
import SendPushNotification from "../pages/SendPushnotif"
import SmsNotification from "../pages/Smsnotification"
import SendEmail from "../pages/SendEmail"
import Main1 from "../pages/Main1"
import UsersTable from "../pages/UsersTable"
import Settings2 from "../pages/Settings2"
import Signup from "../pages/auth/Signup"

const protectedRoutes = [
	{
		path: "/sign-up",
		element: <Signup />,
	},
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
		element: <Settings2 />,
	},
	{
		path: "/allApplication",
		element: <AllApplication />,
	},
	 {
		path: "/tools",
		element: <Tool />,
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
		path: "/appDetail/:id",
		element: <AppDetails/>,
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
	{
		path: "/users",
		element: <UsersTable />,
	},
]

export { protectedRoutes }
