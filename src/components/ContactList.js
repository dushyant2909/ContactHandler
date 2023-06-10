import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props)
{
    const displayAllContacts = props.contacts.map((contact) => {
        return <ContactCard name={contact.name} email={contact.email} />
            // return(
            //     <div className="item">
            //         <div className="content">
            //             <div className="header">{contact.name}</div>
            //             <div>{contact.email}
            //             </div>
                        
            //         </div>
            //         <i className="trash alternate outline icon"></i>
            //     </div>
            // ) 
        })

    return (
        <div className="ui celled list">
            Contact List
            {displayAllContacts}
        </div>
    )
}

export default ContactList;