import { useLocation, Navigate, Outlet} from "react-router-dom";




const ProtectedRoutes = () => {
  

  function doesHttpOnlyCookieExist(cookiename: string) {
    const d = new Date();
    d.setTime(d.getTime() + (1000));
    const  expires = "expires=" + d.toUTCString();
  
    document.cookie = cookiename + "=new_value;path=/;" + expires;
    return document.cookie.indexOf(cookiename + '=') == -1;
  }

   
   
    // const token = useSelector(selectCurrentToken);
    const location = useLocation();

    const checkCookie = doesHttpOnlyCookieExist('Auth')

    return (
        checkCookie ? <Outlet />  :  <Navigate to="/" state={{from: location}} replace/>
      )

}

export default ProtectedRoutes;