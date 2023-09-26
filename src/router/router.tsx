
import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import '../App.css'
import Signin from "../auth/Signin";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={Signup()} />
            <Route path="/sign-in" element={Signin()} />
            {/* <Route path="/" element={App()} /> */}

        </Routes>
    )
}

export default Routers;