import React from "react";
import Cardstyles from "./ContactCard.module.css"

function ContactCard(props)
{
  const deleteContact = ()=>{
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
            <button id={Cardstyles.editBtn} className="btn btn-primary"><i className="fas fa-edit" ></i> Edit</button>
            <button id={Cardstyles.editBtn} onClick={deleteContact} className="btn btn-danger"><i className="fas fa-trash"></i> Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
        
}

export default ContactCard;