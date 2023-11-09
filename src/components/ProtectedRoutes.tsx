// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom"
// import { selectCurrentUser } from '../store/features/auth/authSlice';

const ProtectedRoutes = () => {
	const user = localStorage.getItem("persist:root")
	const data = JSON.stringify(user)
	console.log(data, "Unprotected")

	return user ? <Outlet /> : <Navigate to="/dashboard" />
}

export default ProtectedRoutes
