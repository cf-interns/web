import "../App.css"
import Signin from "../pages/auth/Signin"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ResetPassword from "../pages/auth/ResetPassword"
import Signup from "../pages/auth/Signup"

const unprotectedRoutes = [
	{
		path: "/",
		element: <Signin />,
	},
	{
		path: "/sign-up",
		element: <Signup />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-password/:id",
		element: <ResetPassword />,
	},
]

export { unprotectedRoutes }
