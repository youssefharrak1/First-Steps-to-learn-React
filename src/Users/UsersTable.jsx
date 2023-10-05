import {useContext} from "react";
import {UsersContext} from "./UsersApp";

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

                </tr>
                </thead>
                <tbody>
                {
                    Context.users.length>0?Context.users.map((users,key)=> <tr key={key}>
                    <td>{users.id}</td>
                    <td>{users.fullname}</td>
                    <td>{users.country}</td>
                </tr>): <tr><td colSpan={3} align={"center"}>No users to display</td></tr>
                }

                </tbody>
            </table>
        </>
    )
}