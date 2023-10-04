import UsersTable from "./UsersTable";
import {useState} from "react";

export default function  UsersApp()
{
    const InitialData=[
        {
            id:1,
            fullname:"Youssef harrak",
            country:"Morocco",
        },
        {
            id:2,
            fullname:"Khalid harrak",
            country:"Morocco",
        },
        {
            id:3,
            fullname:"Radia harrak",
            country:"Morocco",
        }
    ]
    const [users, setUsers]=useState(InitialData)
    return(
       <UsersTable users={users} />
    )

}