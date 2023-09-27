
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import '../App.css'
import Signin from "../auth/Signin";
import Welcome from "../store/features/auth/Welcome";
import RequireAuth from "../store/features/auth/RequireAuth";
import UsersList from "../store/features/user/UsersList";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={Signup()} />
            <Route path="/sign-in" element={Signin()} />
            <Route path="/dashboard" element={Welcome()}  />
            {/* <Route path="/" element={App()} /> */}


        <Route element= {RequireAuth()}>
            <Route path="welcome" element={Welcome()}   />
            <Route path="protected" element={UsersList()}   />

        </Route>
        </Routes>
    )
}

export default Routers;