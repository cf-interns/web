
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import '../App.css'
import Signin from "../auth/Signin";
import ResetPassword from "../components/ResetPassword";
import ForgotPassword from "../components/ForgotPassword";
import ErrorPage from "../components/Erropage";
import AppDetails from "../components/AppEmail";
import SendEmail from "../components/SendEmail";
import Trail from "../components/trail";
import SmsNotifiaction from "../components/Smsnotification";
import PushNotification from "../components/SendPushnotif";
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
                <Route path="/appDetails" element={<AppDetails/>} />
                <Route path="/sendpushnotification" element={<PushNotification/>} />
                <Route path="/sendemail" element={<SendEmail/>} />
                <Route path="/smsnotification" element={<SmsNotifiaction/>} />
                <Route path="/trail" element={<Trail/>} />
                <Route path="*" element={<ErrorPage/>} />
               

            </Route>

        </Routes>
    )
}

export default Routers;