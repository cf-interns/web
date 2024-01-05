import "../App.css"
import Trail from "../pages/auth/trail"
import CreateApplication from "../pages/CreateApplication"
import AllApplication from "../pages/allApplication"
import SendSMS from "../pages/sendSMS"
import SendPush from "../pages/SendPush"
import Sms from "../pages/sms"
import AppDetails from "../pages/AppDetails"
import Tool from "../pages/Tools"
import SendPushNotification from "../pages/SendPushnotif"
import SmsNotification from "../pages/Smsnotification"
import SendEmail from "../pages/SendEmail"
import Main1 from "../pages/Main1"
import UsersTable from "../pages/UsersTable"
import Settings2 from "../pages/Settings2"
import Signup from "../pages/auth/Signup"
import AutoNotifications from "../pages/AutoNotifications"
import AutoSMS from "../pages/AutoSMS"

const protectedRoutes = [
	{
		path: "/sign-up",
		element: <Signup />,
		icon: <i className="pi-user-plus" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/dashboard",
		element: <Main1 />,
		icon: <i className="pi-home" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/CreateApplication",
		element: <CreateApplication />,
		icon: <i className="pi-plus-circle" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/settings",
		element: <Settings2 />,
		icon: <i className="pi-cog" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/allApplication",
		element: <AllApplication />,
		icon: <i className="pi-list" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/tools",
		element: <Tool />,
	},
	{
		path: "/send-sms",
		element: <SendSMS />,
		icon: <i className="pi-bell" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/send-push",
		element: <SendPush />,
		icon: <i className="pi-bell" style={{ fontSize: "1.5rem" }}></i>,
	},
	/* {
		path: "/VIewDetails/:id",
		element: <ViewDetails />,
	}, */
	{
		path: "/sms",
		element: <Sms />,
		icon: <i className="pi-bell" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/appDetail/:id",
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		element: (id: string, details: any) => {
			<AppDetails id={id} setVisibleDetails={details} />
		},
	},
	{
		path: "/sendpushnotification",
		element: <SendPushNotification />,
	},
	{
		path: "/sendemail",
		element: <SendEmail />,
		icon: <i className="pi-bell" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/smsnotification",
		element: <SmsNotification />,
		icon: <i className="pi-bell" style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/trail",
		element: <Trail />,
	},
	{
		path: "/users",
		element: <UsersTable />,
		icon: <i className="pi-users " style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/auto-emails",
		element: <AutoNotifications />,
		icon: <i className="pi-users " style={{ fontSize: "1.5rem" }}></i>,
	},
	{
		path: "/auto-sms",
		element: <AutoSMS />,
		icon: <i className="pi-users " style={{ fontSize: "1.5rem" }}></i>,
	},
]

export { protectedRoutes }
