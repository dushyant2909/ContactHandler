import React from "react";
import ContactCard from "./ContactCard";
import styles from "./ContactList.module.css"

function ContactList(props)
{
    // To handle calling feature
    const callHandler = (phoneNo) =>
    {
        props.callHandler(phoneNo);
    }
    // For deleting contact
    const deleteContactHandler = (id) =>{
        props.deleteHandler(id);
    }
    //To show all contacts list
    const displayAllContacts = props.contacts.map((contact) => {
        return <ContactCard id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} deleteHandler = {deleteContactHandler} callHandler = {props.callHandler} />
        })

    return (
            <div className={styles.container}>
                <h1>Contacts List</h1>
                <div className="input-group mt-2" id={styles.searchBox}>
                    <input onChange={(e)=>{props.searchHandler(e.target.value)} } type="text"  className="form-control" placeholder="Enter name, email, or phone" />
                    <span class="input-group-text">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div className="row">
                {displayAllContacts}
            </div>
            </div>
    )
}

export default ContactList;