import {useContext} from "react";
import {UsersContext} from "./UsersApp";
import {Link} from "react-router-dom";

export default function UsersTable()
{
    const Context=useContext(UsersContext)
    return (
        <>
            <table className="table table-striped table-responsive">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Country</th>
                    <th scope="col">Action</th>

                </tr>
                </thead>
                <tbody>
                {
                    Context.users.length>0?Context.users.map((user,key)=> <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.country}</td>
                    <td>
                        <Link to={`/user/${user.id}/edit`} className="btn btn-primary mx-1">
                            Update
                        </Link>
                        <Link to={`/user/${user.id}/delete`} className="btn btn-danger">
                            Delete
                        </Link>



                    </td>
                </tr>): <tr><td colSpan={4} align={"center"}>No users to display</td></tr>
                }

                </tbody>
            </table>
        </>
    )
}