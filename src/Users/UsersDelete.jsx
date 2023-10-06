import {useContext} from "react";
import {UsersContext} from "./UsersApp";
import {useParams} from "react-router-dom";

export default function UsersDelete()
{


    const Context=useContext(UsersContext)
    const params=useParams()
    const onhandlesubmit=(e)=>{
        e.preventDefault()
        Context.deleteuser({
            payload:{
                id:parseInt(params.id),
            }
        })

    }

    return (
        <>

            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="submit" onClick={onhandlesubmit}>Delete</button>
            </div>
        </>
    )
}