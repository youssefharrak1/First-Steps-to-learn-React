import {useRef} from "react";

export default function UsersAdd({lastid,onAddUser})
{
    const fullname=useRef(null);
    const country=useRef(null);
    const handleSubmit=(e)=>
{
    e.preventDefault();
  onAddUser({
      payload:{
          id:lastid,
          fullname:fullname.current.value,
          country:country.current.value,
      }
  })
    fullname.current.value=null
    country.current.value=null


}
    return (
        <>
            <h1> Add User</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 row">
                    <label htmlFor="Current Id" className="col-sm-2 col-form-label">Current Id</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="Current Id" value={lastid} />
                    </div>

                </div>

                <div className="mb-3 row">
                    <label htmlFor="Fullname" className="col-sm-2 col-form-label">Fullname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Fullname"   name="fullname" ref={fullname} />
                    </div>

                </div>

                <div className="mb-3 row">
                    <label htmlFor="Country" className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <select className="form-select" name="country"  id="Country" ref={country}>
                            <option value="">Select Your Country</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Tunisia">Tunisia</option>
                        </select>
                    </div>

                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">ADD</button>
                </div>
            </form>
        </>
    )
}