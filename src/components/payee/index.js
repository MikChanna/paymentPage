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
            <Accordian/>
            </div>
        </div>
    )
}

export default Payee;
