import { Route, Routes } from "react-router-dom"
import UnprotectedRoutes from "../components/UnprotectedRoutes"
import { unprotectedRoutes } from "./unprotectedRoute"
import ErrorPage from "../pages/Erropage"
import { protectedRoutes } from "./protectedRoutes"
import ProtectedRoutes from "../components/ProtectedRoutes"

const Routers = () => {
	return (
		<Routes>
			<Route element={<UnprotectedRoutes />}>
				{unprotectedRoutes.map((route, key) => (
					<Route key={key} path={route.path} element={route.element} />
				))}
			</Route>

			<Route element={<ProtectedRoutes />}>
				{protectedRoutes.map((route, key) => (
					<Route key={key} path={route.path} element={route.element} />
				))}
			</Route>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	)
}

export default Routers
