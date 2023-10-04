import UsersTable from "./UsersTable";
import {useState} from "react";
import UsersAdd from "./UsersAdd";

export default function  UsersApp()
{

    const [users, setUsers]=useState([])
    const[lastid,setLastId]=useState(1)
    const addUser=(data)=>{
     setUsers(prevState => [...prevState,data.payload])
     setLastId(prevState => prevState+1)

    }
    return(
        <>
            <UsersAdd lastid={lastid} onAddUser={addUser} />
            <hr/>
            <UsersTable users={users}  />

        </>

    )

}