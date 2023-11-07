
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
import Email from "../components/SendEmail";
import SendSMS from "../components/sendSMS";
import SendPush from "../components/SendPush";
import ViewDetails from "../components/ViewDetails";
import Sms from "../components/sms";


const Routers = () => {
    return (
        <Routes>

            <Route element={<UnprotectedRoutes />}>
                <Route path="/" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword
                 />} />
                <Route path="/reset-password/:id" element={<ResetPassword />} />


            </Route>



            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<DashboardMain />}>
                 <Route index element={<Main1 />} /> 

                </Route>
                <Route path="/CreateApplication" element={<CreateApplication />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/allApplication" element={<AllApplication />} />
                <Route path='/send-email' element={<Email />}/>
                <Route path='/send-sms' element={<SendSMS />}/>
                <Route path='/send-push' element={<SendPush />}/>
                <Route path="/VIewDetails/:id" element={<ViewDetails/>} />
                <Route path="/email" element={<Email/>} />
                <Route path="/sms" element={<Sms/>} />


            </Route>

        </Routes>
    )
}

export default Routers;