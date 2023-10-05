import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import UsersTable from "./UsersTable";
import UsersAdd from "./UsersAdd";
import UsersEdit from "./UsersEdit";

export default function UsersLayout()
{
    return (
        <>
            <BrowserRouter>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link"> Users List</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/user/create'} className="nav-link"> Add User</Link>
                        </li>

                    </ul>
                </nav>
                <Routes>
                    <Route index element={<UsersTable />}/>
                    <Route path={'/user/create'} element={<UsersAdd />}/>
                    <Route path={'/user/:id/edit'} element={<UsersEdit />}/>
                </Routes>
            </BrowserRouter>
         <Outlet />
        </>


    )
}