
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import '../App.css'
import Signin from "../auth/Signin";
import Welcome from "../store/features/auth/Welcome";
import RequireAuth from "../store/features/auth/RequireAuth";
import UsersList from "../store/features/user/UsersList";
import ResetPassword from "../components/ResetPassword";
import ForgotPassword from "../components/ForgotPassword";
import CheckEmail from "../components/CheckEmail";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={Signup()} />

            <Route path="/sign-in" element={Signin()}>
               
            </Route>
            <Route path="/forgot-password" element={ForgotPassword()}  />
            <Route  path="/reset-password/:id" element={ResetPassword()}/>
            <Route path="/dashboard" element={Welcome()}  />
             <Route path="/check-email" element={CheckEmail()} /> 


        <Route element= {RequireAuth()}>
            <Route path="welcome" element={Welcome()}   />
            <Route path="protected" element={UsersList()}   />

        </Route>
        </Routes>
    )
}

export default Routers;