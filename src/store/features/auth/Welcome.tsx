import { useSelector } from "react-redux"
import { selectCurrentUser } from "./authSlice"
import { Link, Navigate } from "react-router-dom";



const Welcome = () => {
    const user = useSelector(selectCurrentUser);
    //  console.log(user, 'USER');
    
    const welcome = user ? `Welcome  ${user.firstName}!` : <Navigate to='/'/>

  return (

    <section>
    <div>{welcome}</div>
    <p><Link to='/protected'>Visit Protected Resource!</Link></p>
    </section>


  )
}

export default Welcome