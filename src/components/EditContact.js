import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function EditContact(props)
{
    const location = useLocation();
    const { contactName, contactEmail, contactPhone } = location.state;
    console.log(contactName);
    const navigate = useNavigate();

    const submitHandler =(event)=>{
        event.preventDefault();
    }
    return (
        <div className="wrapper">
            <div className="container">
            <h1>Edit Contact</h1>
            <form onSubmit={submitHandler} action="#">
            <div className="form-group">
                <label>Name</label>
                <input type="text" value={contactName} className="form-control"  name="name" placeholder="Enter Name" required></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={contactEmail} className="form-control" name="email" placeholder="Enter e-mail" required></input>
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text" value={contactPhone} className="form-control"  name="phone" placeholder="Enter Phone" required></input>
            </div>
            <button onClick={()=>{navigate('/ContactHandler/allContacts')}} type="tel" className="btn btn-primary btn-submit">Save Changes</button>
            </form>
        </div>
    </div>
    )
}

export default EditContact;
