import UsersTable from "./UsersTable";
import {createContext, useContext, useState} from "react";
import UsersAdd from "./UsersAdd";
import UsersLayout from "./UsersLayout";


export const UsersContext = createContext({
    users: [],
    lastid: 1,
    adduser:()=>null,
    updateuser:()=>null
});
export default function  UsersApp()
{

    const [users, setUsers]=useState([])
    const[lastid,setLastId]=useState(1)
    const addUser=(data)=>
    {
     setUsers(prevState => [...prevState,data.payload])
     setLastId(prevState => prevState+1)
    }
    const UpdateUser=(data)=>
    {
      console.log(data)
    }
    return(
        <>
            <UsersContext.Provider value={{
                users: users,
                lastid: lastid,
                adduser:addUser,
                updateuser:UpdateUser,
            }}>
                <UsersLayout  />
            </UsersContext.Provider>



        </>

    )

}