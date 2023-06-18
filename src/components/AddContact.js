import React from "react";
import './AddContact.css';
import { useState } from "react";

function AddContact(props)
{
    const [oldContacts,setContacts] = useState({
        name:"",
        email:"",
        phone:""
    });

    // To handle contact submission
    const submitHandler = (event) =>{
        event.preventDefault();
        props.addNewContact(oldContacts);
        setContacts({name:"",email:"",phone:""});
        alert("Contact Created Successfully")
    }
    // To handle edit in contact
    const changeHandler = (event) =>{
        setContacts({
            ...oldContacts,[event.target.name]:event.target.value,
        })
        
    }

    return (
        <div className="wrapper">
            <div className="container">
            <h1>Add Contact</h1>
            <form onSubmit={submitHandler} action="#">
            <div className="form-group">
                <label>Name</label>
                <input type="text" value={oldContacts.name} className="form-control" onChange={changeHandler} name="name" placeholder="Enter Name" required></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={oldContacts.email} className="form-control" onChange={changeHandler} name="email" placeholder="Enter e-mail" required></input>
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={oldContacts.phone} className="form-control" onChange={changeHandler} name="phone" placeholder="Enter Phone" required></input>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">Add Contact</button>
            </form>
        </div>
    </div>
    )
}

export default AddContact;
