import React from "react";
import "./style.css";
import payeeInfo from "../../payeeSample.json";

function Payee(props){

    console.log(payeeInfo);
    console.log(payeeInfo[0])

    return(
        <div className = "card">
            <div className = "card-header">
                Payee
            </div>
            <div className="card-body">
            <h5 className = "card-title">{props.name}</h5>
            <p className="card-text"> {props.address} {props.city}, {props.state} {props.country}, {props.zip}</p>
            <a href="#" className="btn btn-primary"> See Details</a>
            </div>
        </div>
    )
}

export default Payee;
