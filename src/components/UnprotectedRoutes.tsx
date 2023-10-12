
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { selectCurrentUser } from '../store/features/auth/authSlice';

const UnprotectedRoutes = () => {

    const user = localStorage.getItem('persist:root')
  return (

          !user ? <Outlet /> : <Navigate to='/dashboard'  />
  )
}

export default UnprotectedRoutes