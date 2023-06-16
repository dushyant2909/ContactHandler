import React from "react";
import ContactCard from "./ContactCard";
import styles from "./ContactList.module.css"

function ContactList(props)
{
    const deleteContactHandler = (id) =>{
        props.deleteHandler(id);
    }
    const displayAllContacts = props.contacts.map((contact) => {
        return <ContactCard id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} deleteHandler = {deleteContactHandler} />
        })

    return (
            <div className={styles.container}>
                
                <h1>Contacts List</h1>
                <div className="row" id={styles.outerrow}>
                {displayAllContacts}
            </div>
            </div>
    )
}

export default ContactList;