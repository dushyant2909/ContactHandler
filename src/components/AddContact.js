import React from "react";

function AddContact()
{
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Name"></input>
                </div>
                <div className="field">
                    <label>E-mail</label>
                    <input type="text" name="email" placeholder="Enter E-mail"></input>
                </div>
                <button className="ui button blue">Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;
