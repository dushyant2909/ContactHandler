import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props)
{
    const displayAllContacts = props.contacts.map((contact) => {
        return <ContactCard name={contact.name} email={contact.email} />
        })

    return (
        <div className="ui celled list">
            Contact List
            {displayAllContacts}
        </div>
    )
}

export default ContactList;