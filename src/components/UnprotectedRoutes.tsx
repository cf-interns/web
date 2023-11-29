// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom"
// import { selectCurrentUser } from '../store/features/auth/authSlice';

const UnprotectedRoutes = () => {
	const user = localStorage.getItem("user")
	const data = JSON.stringify(user)
	console.log(data, "Unprotected")

	return !user ? <Outlet /> : <Navigate to="/dashboard" />
}

export default UnprotectedRoutes
