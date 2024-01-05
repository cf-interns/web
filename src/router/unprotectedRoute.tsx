import "../App.css"
import Signin from "../pages/auth/Signin"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ResetPassword from "../pages/auth/ResetPassword"
import CheckEmail from "../pages/auth/CheckEmail"

const unprotectedRoutes = [
	{
		path: "/",
		element: <Signin />,
	},
	/* {
		path: "/sign-up",
		element: <Signup />,
	}, */
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-password/:id",
		element: <ResetPassword />,
	},
	{
		path: "/check-email",
		element: <CheckEmail />,
	},
]

export { unprotectedRoutes }
