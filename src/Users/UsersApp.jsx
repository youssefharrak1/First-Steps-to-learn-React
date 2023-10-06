import UsersTable from "./UsersTable";
import {createContext, useContext, useState} from "react";
import UsersAdd from "./UsersAdd";
import UsersLayout from "./UsersLayout";


export const UsersContext = createContext({
    users: [],
    lastid: 1,
    adduser:()=>null,
    updateuser:()=>null,
    deleteuser:()=>null,
});
export default function  UsersApp()
{

    const [users, setUsers]=useState([])
    const[lastid,setLastId]=useState(1)
    const addUser=(data)=>
    {
     setUsers(prevState => [...prevState,data.payload])
     setLastId(prevState => prevState+1)
        window.history.back()
    }
    const UpdateUser=(data)=>
    {
        const {id,...rest}=data.payload
        setUsers(prevState => prevState.map(user=> {
            if(user.id===id)
            {
                return {id:user.id,...rest}
            }
            return user
        }))
        window.history.back()
    }
    const DeleteUser=(data)=>{
        const {id}=data.payload
        setUsers(prevState => prevState.filter(user => user.id !== id ))
       window.history.back()
    }
    return(
        <>
            <UsersContext.Provider value={{
                users: users,
                lastid: lastid,
                adduser:addUser,
                updateuser:UpdateUser,
                deleteuser:DeleteUser,
            }}>
                <UsersLayout  />
            </UsersContext.Provider>



        </>

    )

}