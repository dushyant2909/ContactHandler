import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from "react";

function EditContact(props)
{
    const location = useLocation();
    const { id,contactName, contactEmail, contactPhone } = location.state;

    const [contactInfo,updateInfo] = useState({
        id:id,
        name:contactName,
        email:contactEmail,
        phone:contactPhone
    });
    const changeHandler = (event)=>
    {
        updateInfo({...contactInfo,[event.target.name]:event.target.value});
    }
    
    const navigate = useNavigate();

    const submitHandler =(event)=>{
        event.preventDefault();
        props.saveChangesHandler(contactInfo);
        navigate('/ContactHandler/allContacts');
    }

    return (
        <div className="wrapper">
            <div className="container">
            <h1>Edit Contact</h1>
            <form onSubmit={submitHandler} action="#">
            <div className="form-group">
                <label>Name</label>
                <input type="text" value={contactInfo.name} onChange={changeHandler} className="form-control"  name="name" placeholder="Enter Name" required></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={contactInfo.email} onChange={changeHandler} className="form-control" name="email" placeholder="Enter e-mail" required></input>
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text" value={contactInfo.phone} onChange={changeHandler} className="form-control"  name="phone" placeholder="Enter Phone" required></input>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">Save Changes</button>
            </form>
        </div>
    </div>
    )
}

export default EditContact;
