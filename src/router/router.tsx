
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import '../App.css'
import Signin from "../auth/Signin";
import ResetPassword from "../components/ResetPassword";
import ForgotPassword from "../components/ForgotPassword";
import ProtectedRoutes from "../store/features/auth/RequireAuth";
import UnprotectedRoutes from "../components/UnprotectedRoutes";
import Main1 from "../components/Main1";
import CreateApplication from "../components/CreateApplication";
import Settings from "../components/settings";
import AllApplication from "../components/allApplication";
import DashboardMain from "../components/DashboardMain";


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
                <Route path="/dashboard" element={<DashboardMain />}>
                 <Route index element={<Main1 />} /> 

                </Route>
                <Route path="/CreateApplication" element={<CreateApplication />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/allApplication" element={<AllApplication />} />


            </Route>

        </Routes>
    )
}

export default Routers;