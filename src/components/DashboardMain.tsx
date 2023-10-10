import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import {Outlet} from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div className=" flex h-full overflow-hidden">
        <div className="basis-[12%] h-[100vh]">
            <Sidebar />
        </div>
        <div className="basis-[88%] border">
            <Dashboard />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardMain