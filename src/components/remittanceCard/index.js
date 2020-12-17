import React from "react";


function RemittanceCard (props) {


    return(
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.payorName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">ID: {props.payorId}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Invoice #: {props.invoice}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Amount: {props.amount}</h6>
            <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default RemittanceCard;