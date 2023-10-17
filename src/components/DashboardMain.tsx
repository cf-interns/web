import  { NavbarDash } from "./Dashboard";
// import Sidebar from "./Sidebar";
import {Outlet} from 'react-router-dom'
import SidebarV2 from "./SidebarV2";

const DashboardMain = () => {
  return (
    <div className="h-full overflow-hidden flex w-[100vw]">
 
        <div className="basis-[14%] h-[100vh]">
        <SidebarV2/>

        </div> 
        <div className="basis-[88%] border w-fit">
        <NavbarDash />
        <div>
            <Outlet />
        </div>
            
        </div>
        
    </div>
  )
}

export default DashboardMain