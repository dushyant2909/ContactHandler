import React from "react";

function ContactCard(props)
{
    return(
        <div className="item">
            <div className="content">
                <div className="header">{props.name}</div>
                <div>{props.email}</div>
            </div>
            <i className="trash alternate outline icon"></i>
        </div>
    ) 
}

export default ContactCard;