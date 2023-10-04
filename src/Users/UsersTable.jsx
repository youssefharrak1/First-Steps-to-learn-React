export default function UsersTable({users})
{
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
                    (users.length>0)?users.map((users,key)=> <tr key={key}>
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