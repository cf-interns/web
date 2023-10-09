
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import '../App.css'
import Signin from "../auth/Signin";
import Welcome from "../store/features/auth/Welcome";
import UsersList from "../store/features/user/UsersList";
import ResetPassword from "../components/ResetPassword";
import ForgotPassword from "../components/ForgotPassword";
import CheckEmail from "../components/CheckEmail";
import ProtectedRoutes from "../store/features/auth/RequireAuth";
import UnprotectedRoutes from "../components/UnprotectedRoutes";


const Routers = () => {
    return (
        <Routes>

            <Route element={<UnprotectedRoutes />}>
                <Route path="/" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:id" element={<ResetPassword />} />


            </Route>



            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Welcome />} />
                {/* <Route path="welcome" element={<Welcome />} /> */}
                <Route path="/protected" element={<UsersList />} />
                <Route path="/check-email" element={<CheckEmail />} />

            </Route>

        </Routes>
    )
}

export default Routers;