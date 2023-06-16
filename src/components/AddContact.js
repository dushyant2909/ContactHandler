import React from "react";
import './AddContact.css';

function AddContact()
{
    return (
        <div className="container">
        <h1>Add Contact</h1>
        <form>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" required></input>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter e-mail" required></input>
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter Phone" required></input>
        </div>
        <button type="submit" className="btn btn-primary btn-submit">Add Contact</button>
        </form>
    </div>
    )
}

export default AddContact;
