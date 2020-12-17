import React from "react";
import "./style.css";
import Accordian from "../accordian";

function Payee(props){


    return(
        <div className = "card">
            <div className = "card-header">
                Payee
            </div>
            <div className="card-body">
            <h5 className = "card-title">{props.name}</h5>
            <p className="card-text"> {props.address} {props.city}, {props.state} {props.country}, {props.zip}</p>
            <Accordian
            name={props.name}
            attention={props.attention}
            submissionDate={props.submissionDate}
            pan={props.pan}
            cvv={props.cvv}
            exp={props.exp}
            fax={props.fax}
            phone={props.phone}
            remittance={props.remittance}
            PN={props.PN}
            PI={props.PI}
            invoice={props.invoice}
            description={props.Description}
            amount={props.Amount}
                    />
            </div>
        </div>
    )
}

export default Payee;
