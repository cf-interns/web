import { useGetUsersQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";


const UsersList = () => {
    const {data: users, isLoading,isSuccess, isError, error} = useGetUsersQuery();
    console.log(users, 'USER');
    

    let content2;

 if(isLoading) {
    content2 = <p>'Loading ...</p>;
 } else if (isSuccess) {
    content2 = (
        <section>
            <h1>Users List</h1>
            <ul>{users.map((user, i) => {
                return <li key={i}>{user.firstName}</li>
                
            })}</ul>
            <Link to='/welcome'>Back to welcome</Link>
        </section>
    )  
 } else if (isError) {
    content2 = <p>{JSON.stringify(error)}</p>;
 }

 return content2
 
}

export default UsersList