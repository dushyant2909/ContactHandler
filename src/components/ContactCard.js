import React from "react";
import Cardstyles from "./ContactCard.module.css"
import { useNavigate } from 'react-router-dom';

function ContactCard(props)
{
  const navigate = useNavigate();

  const editHandler =(id, name, email, phone)=>{
    navigate(`/ContactHandler/editContact/${id}`, 
      { state: { contactName: name, contactEmail: email, contactPhone: phone }
    })
  }

  const deleteContact = ()=>{
    let confirmation = window.confirm("Do you want to delete contact");
    if (confirmation === true)
    props.deleteHandler(props.id);
  }

    return (
    
      <div className="col-md-4">
        <div className={Cardstyles.card}>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className={Cardstyles.card_text}>
              Email: {props.email}<br/>
              Phone: {props.phone}
            </p>
            <div className={Cardstyles.buttonBox}>
            <button onClick={()=>{editHandler(props.id,props.name,props.email,props.phone)}} id={Cardstyles.editBtn} className="btn btn-primary"><i className="fas fa-edit" ></i> Edit</button>
            <button id={Cardstyles.editBtn} onClick={deleteContact} className="btn btn-danger"><i className="fas fa-trash"></i> Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
        
}

export default ContactCard;